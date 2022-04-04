import * as React from 'react';
import { useRouter } from 'next/router';

import { ExtendedNextPage } from '../../../shared/types/extended-next-page';

import { MainLayout } from '../../../layout/main/components/main-layout';

export const NotePage: ExtendedNextPage = () => {
  return (
    <div>123</div>
  );
};

NotePage.Layout = MainLayout;

export default NotePage;
