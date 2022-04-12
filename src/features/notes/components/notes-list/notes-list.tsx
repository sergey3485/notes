import * as React from 'react';
import Link from 'next/link';

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
        <li>
          <NoteCard note={note} key={note.uuid} />
        </li>
      ))}
    </S.NotesListRoot>
  );
};
