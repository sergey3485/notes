import * as React from 'react';
import NextLink from 'next/link';

import * as S from './styled';
import * as BreadcrumbsElement from '@/shared/components/breadcrumbs';

export interface BreadcrumbsProps {
  /**
   * The content
   */
  workspace: string;
  note: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps): JSX.Element => {
  const {
    workspace,
    note,
  } = props;

  return (
    <S.BreadcrumbsRoot>
      <BreadcrumbsElement.Root>
        <BreadcrumbsElement.Item>
          <NextLink href={`/${workspace}`} passHref>
            <BreadcrumbsElement.Link>
              {workspace.toUpperCase()}
            </BreadcrumbsElement.Link>
          </NextLink>
        </BreadcrumbsElement.Item>

        <BreadcrumbsElement.Separator>/</BreadcrumbsElement.Separator>

        <BreadcrumbsElement.Item>{note.toUpperCase()}</BreadcrumbsElement.Item>
      </BreadcrumbsElement.Root>
    </S.BreadcrumbsRoot>
  );
};
