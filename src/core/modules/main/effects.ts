import { PopoutRoute, StorageKey } from '@core/models';
import { allowNotification, denyNotification, setStorageValue } from '@core/vk-bridge';
import { createEffect, forward } from 'effector';
import { back, setActivePopout } from '../router';
import { setSnackbar } from '../ui';
import { checkOnboardingEvent } from './events';

export const checkOnboardingEffect = createEffect(async () => {
  setStorageValue({ key: StorageKey.IsCheckOnboarding, value: true });
});
forward({
  from: checkOnboardingEffect.doneData,
  to: checkOnboardingEvent,
});

export const subscribeNotification = createEffect(async () => {
  try {
    setActivePopout(PopoutRoute.Loading);
    await allowNotification();
    setSnackbar({ type: 'success', message: 'Notifications enabled' });
  } catch (e) {
    setSnackbar({ type: 'error', message: 'You regret notifications' });
  } finally {
    back();
  }
});

export const unsubscribeNotification = createEffect(async () => {
  try {
    setActivePopout(PopoutRoute.Loading);
    await denyNotification();
    setSnackbar({ type: 'success', message: 'Notifications disabled' });
  } catch (e) {
    setSnackbar({ type: 'error', message: 'Something went wrong' });
  } finally {
    back();
  }
});
