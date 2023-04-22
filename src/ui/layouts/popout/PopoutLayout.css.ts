import { style } from '@vanilla-extract/css';

export const popoutLayout = style({
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  overflow: 'hidden',
});
