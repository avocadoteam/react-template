import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { palette } from './palette';

const root = createGlobalTheme('#root', {
  space: {
    small: '.25rem',
    medium: '.5rem',
    large: '1rem',
  },
  fonts: {
    SFProRounded: 'SF Pro Rounded',
    Inter: 'Inter',
  },
  palette,
});

const elementsContract = createThemeContract({
  panelBackground: null,
  modalBackground: null,
  customDivBg: null,
  btn: {
    primary: {
      background: null,
      color: null,
    },
    transparent: {
      background: null,
      color: null,
    },
    negative: {
      background: null,
      color: null,
    },
  },
  tab: {
    active: {
      background: null,
      color: null,
    },
    default: {
      background: null,
      color: null,
    },
  },
  snackbar: {
    color: null,
    background: null,
  },
});

export const lightTheme = createTheme(elementsContract, {
  panelBackground: 'rgb(249, 249, 249)',
  modalBackground: 'rgb(249, 249, 249)',
  customDivBg: 'rgb(255, 255, 255)',
  btn: {
    primary: {
      background: 'rgb(239, 239, 239)',
      color: 'rgb(56, 56, 56)',
    },
    transparent: {
      background: 'transparent',
      color: 'rgb(115, 114, 114)',
    },
    negative: {
      background: 'rgba(230, 70, 70, 0.1)',
      color: 'rgb(230, 70, 70)',
    },
  },
  tab: {
    active: {
      background: 'rgb(239, 239, 239)',
      color: 'rgb(56, 56, 56)',
    },
    default: {
      background: 'transparent',
      color: 'rgb(177, 177, 177)',
    },
  },
  snackbar: {
    color: root.palette.light.gray[600],
    background: 'rgba(255, 255, 255)',
  },
});

export const darkTheme = createTheme(elementsContract, {
  panelBackground: 'rgb(36, 36, 36)',
  modalBackground: 'rgb(36, 36, 36)',
  customDivBg: 'rgb(25, 25, 26)',
  btn: {
    primary: {
      background: 'rgb(239, 239, 239)',
      color: 'rgb(56, 56, 56)',
    },
    transparent: {
      background: 'transparent',
      color: 'rgb(115, 114, 114)',
    },
    negative: {
      background: 'rgba(230, 70, 70, 0.1)',
      color: 'rgb(230, 70, 70)',
    },
  },
  tab: {
    active: {
      background: 'rgb(83, 83, 83)',
      color: 'rgb(243, 243, 243)',
    },
    default: {
      background: 'transparent',
      color: 'rgb(177, 177, 177)',
    },
  },
  snackbar: {
    color: root.palette.dark.gray[600],
    background: 'rgb(25, 25, 26)',
  },
});

export const vars = { all: elementsContract, ...root };

globalStyle('#root', {
  boxSizing: 'border-box',
  fontSize: '16px',
  fontStyle: 'normal',
  userSelect: 'none',
});
globalStyle(`.vkui__root`, {
  '--font-display': `SF Pro Rounded !important`,
  '--font-tt': `SF Pro Rounded !important`,
  '--font-common': `SF Pro Rounded !important`,
  '--background_page': vars.all.panelBackground,
  '--background_content': vars.all.panelBackground,
  '--header_background': vars.all.panelBackground,
} as any);
globalStyle(`.vkuiSearch`, {
  padding: '0 !important',
  background: 'transparent !important',
  marginTop: '1rem',
} as any);
globalStyle(`.vkuiPanel.vkuiPanel--sizeX-regular .vkuiPanel__in, .vkuiPanel.vkuiPanel--sizeX-regular:after`, {
  backgroundColor: `${vars.all.panelBackground} !important`,
} as any);
globalStyle(`.vkuiSnackbar`, {
  background: `transparent !important`,
} as any);

export const contentCenter = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    minHeight: '65vh',
  },
  variants: {
    alignItems: {
      start: {
        alignItems: 'flex-start',
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'flex-start',
      },
    },
  },
});
