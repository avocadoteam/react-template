import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const click = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0px)',
  },
  '25%': {
    opacity: 0.7,
    transform: 'translateY(1px)',
  },
  '50%': {
    opacity: 0.4,
    transform: 'translateY(2px)',
  },
  '75%': {
    opacity: 0.7,
    transform: 'translateY(1px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0px)',
  },
});

export const clickableDiv = recipe({
  variants: {
    isMobile: {
      true: {
        selectors: {
          '&:active': {
            animationName: click,
            animationDuration: '400ms',
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
    isMobile: true,
  },
});
