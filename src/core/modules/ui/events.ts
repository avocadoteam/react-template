import { Appearance, Dimensions, Snackbar } from '@core/models';
import { createEvent } from 'effector';

export const uiEvents = {
  setDefaultState: createEvent(),
  setDimensions: createEvent<Dimensions>(),
  setAppearance: createEvent<Appearance>(),
  setSnackbar: createEvent<Snackbar | null>(),
};
