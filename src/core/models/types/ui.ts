export type Appearance = 'dark' | 'light';

export type Snackbar = {
  type: SnackbarType;
  message: string;
};

type SnackbarType = 'failed' | 'success' | 'message';

export type Tab = {
  title: string;
  value: any;
};

export type Dimensions = {
  width: number;
  height: number;
};
