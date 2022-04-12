import styled from '@emotion/styled';

export const PageSectionsRoot = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 42,
  width: '100%',
});

export const AddButton = styled.button({
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

export const Heading = styled.span({
  fontSize: '16px',
  fontWeight: 500,
  fontVariant: 'small-caps',
  lineHeight: '19px',
  letterSpacing: '0.05em',
  color: '#242424',
  opacity: 0.5,
});

export const WorkspaceList = styled.ul({
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
});

export const WorkspaceListItem = styled.li({
  display: 'flex',
  width: '100%',
  marginBottom: 4,
});

export const Workspace = styled.a<{ active?: boolean }>((props) => ({
  display: 'flex',
  width: '100%',
  padding: '8px',
  alignItems: 'center',
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
