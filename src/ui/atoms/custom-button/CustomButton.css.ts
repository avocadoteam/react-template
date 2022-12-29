import { vars } from '@ui/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const btn = recipe({
  base: {
    minWidth: 'auto',
    width: 319,
    height: 50,
    borderRadius: 20,
  },
  variants: {
    type: {
      primary: vars.all.btn.primary,
      negative: vars.all.btn.negative,
      transparent: vars.all.btn.transparent,
    },
  },
});
