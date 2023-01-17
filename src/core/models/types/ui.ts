export type Appearance = 'dark' | 'light';

export type FontStyle = 'thin' | 'ultralight' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

export type Snackbar = {
  type: SnackbarType;
  message: string;
};

type SnackbarType = 'info' | 'success' | 'error';

export type Tab = {
  title: string;
  value: any;
};

export type Dimensions = {
  width: number;
  height: number;
};
