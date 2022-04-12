import * as React from 'react';
import * as colors from '@radix-ui/colors';
import { RiAddBoxLine } from 'react-icons/ri';

import * as S from './styled';

export interface PageHeaderProps {
  /**
   * The content
   */
  inputValue: string;
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addNote: () => void;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { inputValue, onChangeInputValue, addNote } = props;

  return (
    <S.PageHeaderRoot>
      <S.Input value={inputValue} onChange={onChangeInputValue} placeholder="Find note" />

      <S.Button type="button" onClick={addNote}>
        <RiAddBoxLine size={24} color={colors.gray.gray9} />
      </S.Button>
    </S.PageHeaderRoot>
  );
};
