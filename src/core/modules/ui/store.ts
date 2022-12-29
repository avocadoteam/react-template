import { Appearance, Dimensions, Snackbar } from '@core/models';
import { createStore } from 'effector';
import { setAppearance, setDimensions, setSnackbar } from './events';

type Store = {
  snackbar: Snackbar | null;
  appearance: Appearance;
  dimensions: Dimensions;
};

export const $ui = createStore<Store>({
  snackbar: null,
  appearance: 'light',
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
})
  .on(setSnackbar, (state, snackbar) => ({
    ...state,
    snackbar,
  }))
  .on(setAppearance, (state, appearance) => ({
    ...state,
    appearance,
  }))
  .on(setDimensions, (state, dimensions) => ({
    ...state,
    dimensions: {
      ...dimensions,
    },
  }));
