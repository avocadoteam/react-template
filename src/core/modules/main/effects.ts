import { PopoutRoute, StorageKey } from '@core/models';
import { allowNotification, denyNotification, setStorageValue } from '@core/vk-bridge';
import { createEffect } from 'effector';
import { back, setActivePopout } from '../router';
import { setSnackbar } from '../ui';
import { checkOnboardingEvent, setFetching } from './events';

export const checkOnboardingEffect = createEffect(async () => {
  setStorageValue({ key: StorageKey.IsCheckOnboarding, value: true });
});
checkOnboardingEffect.pending.watch(isPending => {
  setFetching(isPending);
});
checkOnboardingEffect.doneData.watch(() => {
  checkOnboardingEvent();
});

export const subscribeNotification = createEffect(async () => {
  try {
    setActivePopout(PopoutRoute.Loading);
    await allowNotification();
    setSnackbar({ type: 'success', message: 'Notifications enabled' });
  } catch (e) {
    setSnackbar({ type: 'failed', message: 'You regret notifications' });
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
    setSnackbar({ type: 'failed', message: 'Something went wrong' });
  } finally {
    back();
  }
});
