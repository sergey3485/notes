import createPersistedState from 'use-persisted-state';
import { v4 as uuidV4 } from 'uuid';

const useSectionStorage = createPersistedState<Record<string, NoteData[]>>('sections');

export interface NoteData {
  uuid: string;
  section: string;
  title: string;
  data: string;
}

export interface UseSectionValue {
  notes: Record<string, NoteData[]>;
  addNote: () => void;
}

export const useSection = (sectionName: string): UseSectionValue => {
  const [notes, setNotes] = useSectionStorage({});

  const addNote = () => {
    const sectionNotes = [...(notes[sectionName] ?? []), {
      uuid: uuidV4(),
      title: 'new note',
      data: '',
      section: sectionName,
    }];
    // sectionNotes.push(newNote);
    setNotes((prev) => ({ ...prev, [sectionName]: sectionNotes }));

    console.log(notes);
  };

  return {
    notes,
    addNote,
  };
};
