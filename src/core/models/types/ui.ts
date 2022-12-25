export type Appearance = "dark" | "light";

export type Snackbar = {
  type: SnackbarType;
  message: string;
};

type SnackbarType = "failed" | "success" | "message";
