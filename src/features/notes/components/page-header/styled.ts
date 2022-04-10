import styled from '@emotion/styled';
import * as colors from '@radix-ui/colors';

export const PageHeaderRoot = styled.div({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Input = styled.input({
  width: '100%',
  margin: 0,
  outline: 0,
  // cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
  border: '1px solid',
  color: 'inherit',
  fontSize: 'inherit',
  borderColor: colors.grayA.grayA6,
  '&:focus': {
    borderColor: 'black',
  },
});

export const Button = styled.button({
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 16,
  padding: 0,
  border: 'none',
  background: 'none',
  width: 48,
  height: 48,
  borderRadius: '50%',
  ':hover': {
    backgroundColor: colors.grayA.grayA3,
  },
});

export const SvgContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
  border: '1px solid black',
});
