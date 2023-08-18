import { Appearance, Dimensions, Snackbar } from '@core/models';
import { createStore } from 'effector';
import { uiEvents } from './events';

type Store = {
  snackbar: Snackbar | null;
  appearance: Appearance;
  dimensions: Dimensions;
};
const defaultStore: Store = {
  snackbar: null,
  appearance: 'light',
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

export const $ui = createStore<Store>({
  ...defaultStore,
})
  .on(uiEvents.setDefaultState, () => ({
    ...defaultStore,
  }))
  .on(uiEvents.setSnackbar, (state, snackbar) => ({
    ...state,
    snackbar,
  }))
  .on(uiEvents.setAppearance, (state, appearance) => ({
    ...state,
    appearance,
  }))
  .on(uiEvents.setDimensions, (state, dimensions) => ({
    ...state,
    dimensions: {
      ...dimensions,
    },
  }));
