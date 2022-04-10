import * as React from 'react';

import * as Accordion from '@radix-ui/react-accordion';

import { ActiveLink } from '@/shared/components/active-link';
import * as S from './styled';

export interface PageSectionsProps {
  /**
   * The content
   */
  sections: string[];
}

export const PageSections = (props: PageSectionsProps): JSX.Element => {
  const { sections } = props;

  return (
    <Accordion.Root type="single" collapsible asChild>
      <S.PageSectionsRoot>
        <S.AccordionItem value="section">
          <S.AccordionHeader>
            <S.Heading>section</S.Heading>

            <S.AccordionTrigger>
              <S.Arrow size={20} />
            </S.AccordionTrigger>
          </S.AccordionHeader>

          <S.AccordionContent>
            <S.SectionList>
              {sections.map((section, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <S.SectionListItem key={index}>
                  <ActiveLink href={`/${section.split(' ').join('').toLowerCase()}`} global>
                    <S.Section>{section}</S.Section>
                  </ActiveLink>
                </S.SectionListItem>
              ))}
            </S.SectionList>
          </S.AccordionContent>
        </S.AccordionItem>
      </S.PageSectionsRoot>
    </Accordion.Root>
  );
};
