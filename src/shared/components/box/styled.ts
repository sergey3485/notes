import styled from '@emotion/styled';
// import {
//   background,
//   BackgroundProps,
//   border,
//   BorderProps,
//   boxShadow,
//   BoxShadowProps,
//   color,
//   ColorProps,
//   flexbox,
//   FlexboxProps,
//   grid,
//   GridProps,
//   layout,
//   LayoutProps,
//   position,
//   PositionProps,
//   space,
//   SpaceProps,
//   Theme,
// } from 'styled-system';

// import { transform, TransformProps } from '@/modules/core/css-in-js/transform';
// import { shouldForwardProp } from '@/modules/core/css-in-js/shouldForwardProp';
// import { FlattenedColorKeys } from '@/modules/core/theming/types/theme.interface';
// import { LiteralUnion } from '@/modules/core/js/types/LiteralUnion';

// export type BoxType =
//   & SpaceProps
//   & FlexboxProps
//   & LayoutProps
//   & PositionProps
//   & BackgroundProps
//   & BoxShadowProps
//   & BorderProps
//   & ColorProps<Theme, LiteralUnion<FlattenedColorKeys, string>>
//   & TransformProps
//   & GridProps;

// export const BoxRoot = styled('div', { shouldForwardProp })<BoxType>(
//   space,
//   flexbox,
//   layout,
//   position,
//   background,
//   boxShadow,
//   border,
//   color,
//   grid,
//   transform,
// );

import { css, SystemCssProperties } from '@styled-system/css';

export const BoxRoot = styled.div<{ sx?: SystemCssProperties }>((props) => css(props.sx));
