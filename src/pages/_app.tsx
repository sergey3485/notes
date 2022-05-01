import * as React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ExtendedNextPage } from '../shared/types/extended-next-page';
import { GlobalStyles } from '../app/styles/global-styles';
import { ResetStyles } from '../app/styles/reset-styles';

type NewAppProps = AppProps & { Component: ExtendedNextPage };

function MyApp({ Component, pageProps }: NewAppProps) {
  const LayoutComponent = Component.Layout ?? React.Fragment;
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyles />
        <ResetStyles />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
