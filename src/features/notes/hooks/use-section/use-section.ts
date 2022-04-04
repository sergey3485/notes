import createPersistedState from 'use-persisted-state';
import * as React from 'react';

const useSectionStorage = createPersistedState<Record<string, string[]>>('sections');

export interface UseSectionValue {
  notes: Record<string, string[]>;
  addNote: (newNote: string) => void;
}

export const useSection = (sectionName: string): UseSectionValue => {
  const [notes, setNotes] = useSectionStorage({});

  const addNote = (newNote: string) => {
    const sectionNotes = [...(notes[sectionName] ?? []), newNote];
    // sectionNotes.push(newNote);
    setNotes((prev) => ({ ...prev, [sectionName]: sectionNotes }));

    console.log(notes);
  };

  return {
    notes,
    addNote,
  };
};
