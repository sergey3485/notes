import * as React from 'react';
import NextLink from 'next/link';

import * as S from './styled';
import * as BreadcrumbsElement from '@/shared/components/breadcrumbs';

export interface BreadcrumbsProps {
  /**
   * The content
   */
  section: string;
  note: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps): JSX.Element => {
  const {
    section,
    note,
  } = props;

  return (
    <S.BreadcrumbsRoot>
      <BreadcrumbsElement.Root>
        <BreadcrumbsElement.Item>
          <NextLink href={`/${section}`} passHref>
            <BreadcrumbsElement.Link>
              {section.toUpperCase()}
            </BreadcrumbsElement.Link>
          </NextLink>
        </BreadcrumbsElement.Item>

        <BreadcrumbsElement.Separator>/</BreadcrumbsElement.Separator>

        <BreadcrumbsElement.Item>{note.toUpperCase()}</BreadcrumbsElement.Item>
      </BreadcrumbsElement.Root>
    </S.BreadcrumbsRoot>
  );
};
