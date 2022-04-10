import * as React from 'react';

import { RiAddBoxLine } from 'react-icons/ri';
import { IoIosAdd } from 'react-icons/io';
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
        <S.SvgContainer>
          <IoIosAdd size={36} />
        </S.SvgContainer>
      </S.Button>
    </S.PageHeaderRoot>
  );
};
