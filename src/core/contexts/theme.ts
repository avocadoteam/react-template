import React from "react";

const light = {
  appBg: "rgb(249, 249, 249)",
  customDivBg: "rgb(255, 255, 255)",
  btn: {
    primary: {
      background: "rgb(239, 239, 239)",
      color: "rgb(56, 56, 56)",
    },
    transparent: {
      background: "transparent",
      color: "rgb(115, 114, 114)",
    },
    negative: {
      background: "rgba(230, 70, 70, 0.1)",
      color: "rgb(230, 70, 70)",
    },
  },
  tab: {
    active: {
      background: "rgb(239, 239, 239)",
      text: "rgb(56, 56, 56)",
    },
    default: {
      background: "transparent",
      text: "rgb(177, 177, 177)",
    },
  },
  snackbar: {
    text: "rgba(116, 116, 116)",
    background: "rgba(255, 255, 255)",
  },
};

const dark: typeof light = {
  appBg: "rgb(36, 36, 36)",
  customDivBg: "rgb(25, 25, 26)",
  btn: {
    primary: {
      background: "rgb(239, 239, 239)",
      color: "rgb(56, 56, 56)",
    },
    transparent: {
      background: "transparent",
      color: "rgb(115, 114, 114)",
    },
    negative: {
      background: "rgba(230, 70, 70, 0.1)",
      color: "rgb(230, 70, 70)",
    },
  },
  tab: {
    active: {
      background: "rgb(83, 83, 83)",
      text: "rgb(243, 243, 243)",
    },
    default: {
      background: "transparent",
      text: "rgb(177, 177, 177)",
    },
  },
  snackbar: {
    text: "rgba(121, 121, 121)",
    background: "rgb(25, 25, 26)",
  },
};

export const theme = {
  light,
  dark,
};

export const ThemeContext = React.createContext(theme.light);
