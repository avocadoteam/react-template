import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, palette } from './palette';

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
  cardBackground: null,
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
    success: null,
    info: null,
    error: null,
  },
  gray: {
    [100]: null,
    [200]: null,
    [300]: null,
    [400]: null,
    [500]: null,
    [600]: null,
    [700]: null,
    [800]: null,
    [900]: null,
  },
});
const theme = (type: keyof typeof palette) => {
  const p = palette[type];

  return createTheme(elementsContract, {
    panelBackground: p.default,
    modalBackground: p.default,
    cardBackground: p.default,
    customDivBg: p.deep,
    btn: {
      transparent: {
        background: colors.transparent,
        color: colors.gray[114],
      },
      primary: {
        background: colors.gray[239],
        color: colors.gray[56],
      },
      negative: {
        background: colors.negative,
        color: colors.negativeLight,
      },
    },
    tab: {
      active: {
        background: colors.gray[239],
        color: colors.gray[56],
      },
      default: {
        background: colors.transparent,
        color: colors.gray[177],
      },
    },
    snackbar: {
      color: p.gray[600],
      background: p.deep,
      success: colors.nice,
      info: colors.icon,
      error: colors.negative,
    },
    gray: p.gray,
  });
};

export const lightTheme = theme('light');
export const darkTheme = theme('dark');

export const vars = { all: elementsContract, ...root };

const important = (value: string) => `${value} !important`;
globalStyle('#root', {
  boxSizing: 'border-box',
  fontSize: '16px',
  fontStyle: 'normal',
  userSelect: 'none',
});
globalStyle(`.vkui__root`, {
  '--font-display': important(vars.fonts.SFProRounded),
  '--font-tt': important(vars.fonts.SFProRounded),
  '--font-common': important(vars.fonts.SFProRounded),
  '--background_page': important(vars.all.panelBackground),
  '--background_content': important(vars.all.panelBackground),
  '--header_background': important(vars.all.panelBackground),
} as any);
globalStyle(`.vkuiSearch`, {
  padding: important('0'),
  background: important('transparent'),
  marginTop: '1rem',
} as any);
globalStyle(`.vkuiPanel__in`, {
  backgroundColor: important(vars.all.panelBackground),
} as any);
globalStyle(`.vkuiModalPage__in`, {
  backgroundColor: important(vars.all.modalBackground),
  borderTopLeftRadius: important('18px'),
  borderTopRightRadius: important('18px'),
});
globalStyle(`ModalCard`, {
  backgroundColor: important(vars.all.cardBackground),
});
globalStyle(`.vkuiSnackbar`, {
  background: important('transparent'),
} as any);
globalStyle(`.vkuiPromoBanner .SimpleCell--ios, .vkuiPromoBanner .SimpleCell--andoid, .vkuiPromoBanner .PromoBanner__head`, {
  paddingLeft: important('16px'),
  paddingRight: important('16px'),
});
globalStyle('.vkuiPromoBanner .SimpleCell__after', {
  display: important('none'),
});
globalStyle('.vkuiPromoBanner', {
  zIndex: important('10000px'),
  borderRadius: important('21px'),
  outline: important('none'),
  position: 'fixed',
  boxShadow: important('0px 0px 16px rgba(0, 0, 0, 0.05)'),
});
globalStyle('.vkuiPromoBanner', {
  width: important('88.8vw'),
  left: important('50%'),
  WebkitTransform: important('translateX(-50%)'),
  MozTransformOrigin: important('translateX(-50%)'),
  msTransform: important('translateX(-50%)'),
  OTransform: important('translateX(-50%)'),
  transform: important('translateX(-50%)'),
  bottom: important('2vh'),
});
globalStyle('.vkuiPromoBanner', {
  width: important('333px'),
  bottom: important('18px'),
});

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
