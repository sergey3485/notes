import * as React from 'react';

import { RiAddBoxLine } from 'react-icons/ri';
import * as S from './styled';

export interface PageHeaderProps {
  /**
   * The content
   */
  inputValue: string;
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addNote: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { inputValue, onChangeInputValue, addNote } = props;

  return (
    <S.PageHeaderRoot onSubmit={addNote}>
      <S.Input value={inputValue} onChange={onChangeInputValue} />

      <S.Button type="button" onClick={addNote}>
        <RiAddBoxLine size={24} />
      </S.Button>
    </S.PageHeaderRoot>
  );
};
