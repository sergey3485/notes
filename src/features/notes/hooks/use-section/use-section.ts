import createPersistedState from 'use-persisted-state';
import { v4 as uuidV4 } from 'uuid';

const useSectionStorage = createPersistedState<Record<string, Note[]>>('sections');

export interface Note {
  uuid: string;
  section: string;
  title: string;
  content: string;
}

export interface UseSectionValue {
  notes: Record<string, Note[]>;
  addNote: () => void;
  changeNoteProperty: (property: string, newValue: string, noteId: string) => void;
}

const baseNote: Note = {
  uuid: uuidV4(),
  section: 'dashboard',
  title: 'Generale',
  content: 'Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.',
};
export const useSection = (sectionName: string): UseSectionValue => {
  const [notes, setNotes] = useSectionStorage({ dashboard: [baseNote] });

  const addNote = () => {
    const sectionNotes = [...(notes[sectionName] ?? []), {
      uuid: uuidV4(),
      title: 'new note',
      content: '',
      section: sectionName,
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
