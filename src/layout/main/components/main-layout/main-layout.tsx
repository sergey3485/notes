import * as React from 'react';

import { PageSections } from '../page-sections';

import * as S from './styled';

export interface MainLayoutProps {
  /**
   * The content
   */
  children?: React.ReactNode;
}

const sections = ['Dashboard', 'Sketches', 'Shopping List'];

export const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <S.MainLayoutRoot>
      <S.Container>
        <S.LogoContainer>
          <img alt="" src="/planet-logo.png" width={64} height={64} />
        </S.LogoContainer>

        <PageSections sections={sections} />
      </S.Container>

      <S.ContentContainer>{children}</S.ContentContainer>
    </S.MainLayoutRoot>
  );
};
