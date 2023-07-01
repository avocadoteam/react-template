import { recipe } from '@vanilla-extract/recipes';

export const clickableDiv = recipe({
  variants: {
    isMobile: {
      true: {
        transition: 'opacity 1s',
        opacity: 1,
        selectors: {
          '&:active': {
            opacity: 0.3,
            transition: 'opacity 0s',
          },
        },
      },
      false: {
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
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
            transition: 'all 0.2s ease-in-out',
            opacity: 0.4,
          },
          '&:active:not(:disabled)': {
            transition: 'all 0.2s ease-in-out',
            transform: 'translateY(2px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
