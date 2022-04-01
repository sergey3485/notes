import styled from '@emotion/styled';
import * as Accordion from '@radix-ui/react-accordion';
import { RiArrowDownSLine } from 'react-icons/ri';

export const PageSectionsRoot = styled.div({
  display: 'flex',
  padding: 16,
});

export const AccordionHeader = styled(Accordion.AccordionHeader)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 325,
  height: 42,
});

export const AccordionTrigger = styled(Accordion.AccordionTrigger)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 20,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
});

export const AccordionContent = styled(Accordion.AccordionContent)({
  display: 'flex',
});

export const Arrow = styled(RiArrowDownSLine)({
  color: '#242424',
  opacity: 0.5,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

export const Heading = styled.span({
  fontSize: '16px',
  fontWeight: 500,
  fontVariant: 'small-caps',
  lineHeight: '19px',
  letterSpacing: '0.05em',
  color: '#242424',
  opacity: 0.5,
});

export const SectionList = styled.ul({
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const SectionListItem = styled.li({
  display: 'flex',
});

export const Section = styled.a<{ active?: boolean }>((props) => ({
  display: 'flex',
  padding: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: props.active ? 500 : 400,
  lineHeight: '22px',
  letterSpacing: '0.02em',
  color: '#242424',
  margin: '8, 0',
  borderRadius: '4px',
  backgroundColor: props.active ? '#F8F8F8' : 'none',
}));
