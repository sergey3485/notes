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
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
  border: '1px solid',
  borderRadius: '4px',
  color: 'inherit',
  fontSize: 'inherit',
  borderColor: colors.grayA.grayA6,
  '&:focus': {
    borderColor: 'black',
  },
});
