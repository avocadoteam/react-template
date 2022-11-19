import React from "react";

const light = {
  appBg: "#fff",
};

const dark: typeof light = {
  appBg: "#202020",
};

export const theme = {
  light,
  dark,
};

export const ThemeContext = React.createContext(theme.light);
