import { style } from '@vanilla-extract/css';

export const tabs = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 'calc(100% - 30px)',
  padding: '12px 15px 12px 15px',
});
