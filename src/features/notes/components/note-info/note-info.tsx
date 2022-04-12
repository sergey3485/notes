import * as React from 'react';
import { Note } from '../../types/note-workspace-interfaces';

import * as S from './styled';

export interface NoteInfoProps {
  /**
   * The content
   */
  note: Note;
}

export const NoteInfo = (props: NoteInfoProps): JSX.Element => {
  const {
    note,
  } = props;

  return (
    <S.NoteInfoRoot>
      <S.NoteTitle>{note.title}</S.NoteTitle>
      <S.NoteContent>{note.content}</S.NoteContent>
    </S.NoteInfoRoot>
  );
};
