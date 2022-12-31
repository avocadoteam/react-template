import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const typography = recipe({
  base: {
    fontFamily: vars.fonts.SFProRounded,
    margin: 0,
  },
  variants: {
    fontFamily: vars.fonts,
    variant: {
      btn: {
        fontSize: '17px',
        letterSpacing: '0.5px',
        fontWeight: 500,
      },
      tab: {
        fontSize: '17px',
        letterSpacing: '0.5px',
        fontWeight: 500,
      },
      snackbar: {
        fontSize: '15px',
        fontWeight: 500,
      },
    },
    onboarding: {
      header: {
        fontSize: '18px',
        fontWeight: 600,
        color: vars.all.gray[600],
      },
      listItem: {
        fontsSize: '15px',
        fontWeight: 400,
        color: vars.all.gray[400],
      },
    },
    home: {
      header: {
        fontSize: '18px',
        fontWeight: 600,
        color: vars.all.gray[600],
      },
      text: {
        fontSize: '15px',
        fontWeight: 400,
        color: vars.all.gray[400],
      },
    },
    offline: {
      header: {
        fontSize: '24px',
        letterSpacing: '-0.24px',
        fontWeight: 900,
        color: vars.all.gray[900],
      },
      description: {
        fontSize: '20px',
        fontWeight: 500,
        color: vars.all.gray[500],
      },
    },
    notifications: {
      header: {
        fontSize: '18px',
        fontWeight: 600,
        color: vars.all.gray[600],
      },
      subheader: {
        fontSize: '14px',
        fontWeight: 400,
        color: vars.all.gray[400],
      },
    },
    weight: {
      thin: {
        fontWeight: 100,
      },
      ultralight: {
        fontWeight: 200,
      },
      light: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
      extrabold: {
        fontWeight: 800,
      },
      black: {
        fontWeight: 900,
      },
    },
    align: {
      center: {
        textAlign: 'center',
      },
    },
    m: {
      't.5': {
        marginTop: '.5rem',
      },
      t: {
        marginTop: '1rem',
      },
      't1.5': {
        marginTop: '1.5rem',
      },
      t3: {
        marginTop: '3rem',
      },
      t5: {
        marginTop: '5rem',
      },
      l: {
        marginLeft: '1rem',
      },
      'l.5': {
        marginLeft: '.5rem',
      },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
    },
  },
});
