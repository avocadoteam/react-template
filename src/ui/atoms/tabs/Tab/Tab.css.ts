import { vars } from '@ui/theme';
import { recipe } from '@vanilla-extract/recipes';

export const tab = recipe({
  base: {
    height: '36px',
    flex: '1',
    borderRadius: '20px',
    transition: 'all 400ms 100ms ease',
  },
  variants: {
    type: {
      active: vars.all.tab.active,
      default: vars.all.tab.default,
    },
  },
});
