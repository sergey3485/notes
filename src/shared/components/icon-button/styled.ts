import styled from '@emotion/styled';
import * as colors from '@radix-ui/colors';

export const IconButtonRoot = styled.button({
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
  fontSize: '24px',
  ':hover': {
    backgroundColor: colors.grayA.grayA2,
  },
});
