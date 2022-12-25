import { Appearance, Snackbar } from "core/models";
import { createStore } from "effector";
import { setAppearance, setHeight, setSnackbar } from "./events";

type Store = {
  snackbar: Snackbar | null;
  appearance: Appearance;
  height: number;
};

export const $ui = createStore<Store>({
  snackbar: null,
  appearance: "light",
  height: window.innerHeight,
})
  .on(setSnackbar, (state, snackbar) => ({
    ...state,
    snackbar,
  }))
  .on(setAppearance, (state, appearance) => ({
    ...state,
    appearance,
  }))
  .on(setHeight, (state, height) => ({
    ...state,
    height,
  }));
