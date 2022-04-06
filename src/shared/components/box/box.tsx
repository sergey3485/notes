import * as React from 'react';

// import { PolymorphicComponent } from '@/modules/core/react/types/Polymorphic';

import { SystemCssProperties } from '@styled-system/css';
import * as S from './styled';

// export interface BoxProps extends S.BoxType {
//   /**
//    * The content
//    */
//   children?: React.ReactNode;
// }

// /**
//  * The Box component serves as a wrapper component for most of the CSS utility needs.
//  */
// export const Box = React.forwardRef((props, ref) => {
//   const {
//     children,
//     // component = 'div',
//     ...other
//   } = props;

//   return (
//     // @ts-expect-error color attr type error
//     <S.BoxRoot as={component} {...other} ref={ref}>{children}</S.BoxRoot>
//   );
// });

export interface BoxProps {
  /**
   * The content
   */
  children?: React.ReactNode;

  sx?: SystemCssProperties;
}

/**
 * The Box component serves as a wrapper component for most of the CSS utility needs.
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    children,
    ...other
  } = props;

  return (
    <S.BoxRoot {...other} ref={ref}>{children}</S.BoxRoot>
  );
});
