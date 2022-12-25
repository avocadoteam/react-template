import { Snackbar } from '@core/models';
import { Appearance } from '@vkontakte/vkui';
import { createEvent } from 'effector';

export const setHeight = createEvent<number>();
export const setAppearance = createEvent<Appearance>();
export const setSnackbar = createEvent<Snackbar | null>();
