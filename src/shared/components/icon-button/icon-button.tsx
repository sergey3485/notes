import * as React from 'react';

import * as S from './styled';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.IconButtonRoot>{children}</S.IconButtonRoot>
  );
};
