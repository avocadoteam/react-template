export type Appearance = 'dark' | 'light';

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
