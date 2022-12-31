import { style } from '@vanilla-extract/css';

export const popoutLayout = style({
  zIndex: 1000,
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
});
