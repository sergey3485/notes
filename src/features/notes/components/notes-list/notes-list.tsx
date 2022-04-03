import * as React from 'react';
import Link from 'next/link';

import * as S from './styled';

export interface NotesListProps {
  /**
   * The content
   */
  notes: string[];
  section: string;
}

export const NotesList = (props: NotesListProps): JSX.Element => {
  const {
    notes,
    section,
  } = props;

  return (
    <S.NotesListRoot>
      {notes.map((note, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.NotesListItem key={index}>
          <Link passHref href={`/${section}/${note}`}>
            <S.NoteLink>
              {note}
            </S.NoteLink>
          </Link>
        </S.NotesListItem>
      ))}
    </S.NotesListRoot>
  );
};
