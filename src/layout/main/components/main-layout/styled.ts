import styled from '@emotion/styled';

export const MainLayoutRoot = styled.div({
  display: 'flex',
  height: '100wh',
});

export const Sidebar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: 400,
  padding: 32,
  borderRight: '1px solid',
  borderColor: '#D5D5D5',
});

export const ContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  padding: 48,
});

export const LogoContainer = styled.div({
  display: 'flex',
});
