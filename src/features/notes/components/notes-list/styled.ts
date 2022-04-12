import styled from '@emotion/styled';

export const NotesListRoot = styled.ul({
  padding: 0,
  margin: 0,
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  marginTop: 16,
  listStyle: 'none',

  '& > li': {
    width: '100%',
    marginBottom: 16,
  },
});

export const NoteLink = styled.a({
  textDecoration: 'none',
  color: 'black',
  width: '100%',
});
