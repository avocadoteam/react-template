import { createThemeContract } from '@vanilla-extract/css';

const elemnetsContract = createThemeContract({
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
      text: null,
    },
    default: {
      background: null,
      text: null,
    },
  },
  snackbar: {
    text: null,
    background: null,
  },
});
