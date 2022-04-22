import * as React from 'react';
import * as colors from '@radix-ui/colors';
import { RiAddBoxLine } from 'react-icons/ri';

import { IconButton } from '@/shared/components/icon-button';

import * as S from './styled';

export interface PageHeaderProps {
  /**
   * The content
   */
  inputValue: string;
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addNote: () => Promise<void>;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { inputValue, onChangeInputValue, addNote } = props;

  return (
    <S.PageHeaderRoot>
      <S.Input value={inputValue} onChange={onChangeInputValue} placeholder="Find note" />

      <IconButton type="button" onClick={addNote}>
        <RiAddBoxLine color={colors.gray.gray9} />
      </IconButton>
    </S.PageHeaderRoot>
  );
};
