import { recipe } from '@vanilla-extract/recipes';

export const clickableDiv = recipe({
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '@media': {
          '(hover: none)': {
            selectors: {
              '&:hover:not(:disabled)': {
                opacity: 1,
              },
              '&:active:not(:disabled)': {
                opacity: 0.4,
                transform: 'translateY(2px)',
              },
            },
          },
        },
        selectors: {
          '&:hover:not(:disabled)': {
            opacity: 0.4,
          },
          '&:active:not(:disabled)': {
            transform: 'translateY(2px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    clickable: true,
  },
});
