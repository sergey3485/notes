import styled from '@emotion/styled';

export const NoteInfoRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const NoteTitle = styled.h1({
  fontSize: '40px',
  fontWeight: 600,
  lineHeight: '48px',
  letterSpacing: '0.02em',
});

export const NoteContent = styled.span({
  marginTop: 16,
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '21px',
});
