import * as React from 'react';
import Link from 'next/link';

import { Note } from '../../hooks/use-section';
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
        <S.NotesListItem key={note.uuid}>
          <Link passHref href={`/${note.section}/${note.uuid}`}>
            <S.NoteLink>
              {note.title}
            </S.NoteLink>
          </Link>
        </S.NotesListItem>
      ))}
    </S.NotesListRoot>
  );
};
