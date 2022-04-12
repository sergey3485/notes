import createPersistedState from 'use-persisted-state';
import { v4 as uuidV4 } from 'uuid';
import { baseNote, defaultWorkspace } from '../../constants/note-workspaces';
import { Note } from '../../types/note-workspace-interfaces';

const useNotesStorage = createPersistedState<Record<string, Note[]>>('notes');

export interface UseSectionValue {
  notes: Record<string, Note[]>;
  addNote: () => void;
  changeNoteProperty: (property: string, newValue: string, noteId: string) => void;
}

export const useNotes = (sectionName: string): UseSectionValue => {
  const [notes, setNotes] = useNotesStorage({ [defaultWorkspace.uuid]: [baseNote] });

  const addNote = () => {
    const sectionNotes = [...(notes[sectionName] ?? []), {
      uuid: uuidV4(),
      title: 'new note',
      content: '',
      workspace: sectionName,
      date: new Date(),
    }];
    setNotes((prev) => ({ ...prev, [sectionName]: sectionNotes }));
  };

  const changeNoteProperty = (property: string, newValue: string, noteId: string) => {
    const Notes = notes[sectionName].map((note) => {
      if (note.uuid === noteId) {
        return {
          ...note,
          [property]: newValue,
        };
      }
      return note;
    });
    setNotes((prev) => ({ ...prev, [sectionName]: Notes }));
  };

  const changeNote = (id: string, newNote: Partial<Omit<Note, 'uuid'>>) => {
    const Notes = notes[sectionName].map((note) => {
      if (note.uuid === id) {
        return {
          ...note,
          ...newNote,
        };
      }
      return note;
    });
    setNotes((prev) => ({ ...prev, [sectionName]: Notes }));
  };

  return {
    notes,
    addNote,
    changeNoteProperty,
  };
};
