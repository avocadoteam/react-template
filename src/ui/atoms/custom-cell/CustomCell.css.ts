import { style } from '@vanilla-extract/css';

export const cell = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const cellSpaceBetween = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
