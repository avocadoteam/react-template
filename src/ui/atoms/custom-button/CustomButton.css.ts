import { vars } from '@ui/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const btn = recipe({
  base: {
    minWidth: 'auto !important',
    width: '319px !important',
    height: '50px !important',
    borderRadius: '20px !important',
  },
  variants: {
    type: {
      primary: {
        color: `${vars.all.btn.primary.color} !important`,
        background: `${vars.all.btn.primary.background} !important`,
      },
      negative: {
        color: `${vars.all.btn.negative.color} !important`,
        background: `${vars.all.btn.negative.background} !important`,
      },
      transparent: {
        color: `${vars.all.btn.transparent.color} !important`,
        background: `${vars.all.btn.transparent.background} !important`,
      },
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});
