import * as React from 'react';
import Link from 'next/link';
import { Note } from '../../types/note-workspace-interfaces';
import { formatDate } from '@/shared/utils/time';

import * as S from './styled';

export interface NoteCardProps {
  /**
   * The content
   */
  note: Note;
}

export const NoteCard = (props: NoteCardProps): JSX.Element => {
  const {
    note,
  } = props;

  const noteContent = note.content ? `${note.content.slice(0, 50)}...` : '';

  const date = note.createdAt ? formatDate(note.createdAt).split(' ').reverse().join(' ') : '';

  return (
    <Link passHref href={`/${note.workspaceId}/${note.id}`}>
      <S.NoteCardRoot>
        <S.NoteDateCreation>{date.toUpperCase()}</S.NoteDateCreation>
        <S.NoteTitle>{note.title}</S.NoteTitle>
        <S.NoteContent>{noteContent}</S.NoteContent>
      </S.NoteCardRoot>
    </Link>
  );
};
