import { Dimensions, Snackbar } from '@core/models';
import { Appearance } from '@vkontakte/vkui';
import { createEvent } from 'effector';

export const setDimensions = createEvent<Dimensions>();
export const setAppearance = createEvent<Appearance>();
export const setSnackbar = createEvent<Snackbar | null>();
