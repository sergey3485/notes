import styled from '@emotion/styled';
import * as colors from '@radix-ui/colors';

export const WorkspaceSettingsRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 8,
});

export const WorkspaceTitle = styled.span({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '21px',
  letterSpacing: '0.02em',
});

export const SettingsButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'none',
  ':hover': {
    backgroundColor: colors.grayA.grayA2,
  },
});
