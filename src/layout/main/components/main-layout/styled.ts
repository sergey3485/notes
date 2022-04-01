import styled from '@emotion/styled';

export const MainLayoutRoot = styled.div({
  display: 'flex',
  height: '100wh',
});

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: 16,
  borderRight: '1px solid',
  borderColor: '#D5D5D5',
});

export const ContentContainer = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '64px 96px 64px 64px',
});

export const LogoContainer = styled.div({
  display: 'flex',
});
