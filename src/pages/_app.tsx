import * as React from 'react';
import type { AppProps } from 'next/app';
import { ExtendedNextPage } from '../shared/types/extended-next-page';
import { GlobalStyles } from '../app/styles/global-styles';
import { ResetStyles } from '../app/styles/reset-styles';

type NewAppProps = AppProps & { Component: ExtendedNextPage };

function MyApp({ Component, pageProps }: NewAppProps) {
  const LayoutComponent = Component.Layout ?? React.Fragment;
  return (
    <>
      <GlobalStyles />
      <ResetStyles />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}

export default MyApp;
