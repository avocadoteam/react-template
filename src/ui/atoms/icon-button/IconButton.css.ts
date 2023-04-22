import { vars } from '@ui/theme';
import { recipe } from '@vanilla-extract/recipes';

export const iconButton = recipe({
  base: {
    width: 50,
    height: 50,
    borderRadius: 20,
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  variants: {
    scheme: {
      primary: vars.all.btn.primary,
      negative: vars.all.btn.negative,
      transparent: vars.all.btn.transparent,
    },
  },
  defaultVariants: {
    scheme: 'primary',
  },
});
