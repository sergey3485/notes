import * as React from 'react';

import { Note } from '../../types/note-workspace-interfaces';
import { NoteCard } from '../note-card';
import * as S from './styled';

export interface NotesListProps {
  /**
   * The content
   */
  notes: Note[];
}

export const NotesList = (props: NotesListProps): JSX.Element => {
  const { notes } = props;

  return (
    <S.NotesListRoot>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} />
        </li>
      ))}
    </S.NotesListRoot>
  );
};
