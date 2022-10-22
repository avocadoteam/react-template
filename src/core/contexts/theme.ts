import React from "react";

const light = {};

const dark: typeof light = {};

export const theme = {
  light,
  dark,
};

export const ThemeContext = React.createContext(theme.light);
