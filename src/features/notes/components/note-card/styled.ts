import styled from '@emotion/styled';
import * as colors from '@radix-ui/colors';

export const NoteCardRoot = styled.a({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  width: '100%',
  backgroundColor: colors.grayA.grayA1,
  borderRadius: '4px',
  transition: 'background-color 250ms ease',
  textDecoration: 'none',
  color: 'black',

  '&:hover, &:focus': {
    backgroundColor: colors.grayA.grayA2,
  },
});

export const NoteLink = styled.a({
  textDecoration: 'none',
  color: 'black',
  width: '100%',
});

export const NoteTitle = styled.span({
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 6,
});

export const NoteContent = styled.span({
  fontSize: 18,
  fontWeight: 400,
});

export const NoteDateCreation = styled.span({
  fontSize: 16,
  fontWeight: 300,
  letterSpacing: '0.05em',
  color: colors.gray.gray9,
  marginBottom: 4,
});
