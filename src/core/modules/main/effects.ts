import { allowNotification, denyNotification } from '@blumjs/bridge';
import { back, setActivePopout } from '@blumjs/router';
import { PopoutRoute, StorageKey } from '@core/models';
import { setStorageValue } from '@core/vk-bridge';
import { createEffect, forward } from 'effector';
import { uiEvents } from '../ui';
import { mainEvents } from './events';

export const mainEffects = {
  checkOnboarding: createEffect(async () => {
    setStorageValue({ key: StorageKey.IsCheckOnboarding, value: true });
  }),
  subscribeNotification: createEffect(async () => {
    setActivePopout(PopoutRoute.Loading, {
      afterSetHandledCallback: async () => {
        try {
          await allowNotification();
          uiEvents.setSnackbar({ type: 'success', message: 'Notifications enabled' });
        } catch (e) {
          uiEvents.setSnackbar({ type: 'error', message: 'You regret notifications' });
        } finally {
          back();
        }
      },
    });
  }),
  unsubscribeNotification: createEffect(async () => {
    setActivePopout(PopoutRoute.Loading, {
      afterSetHandledCallback: async () => {
        try {
          await denyNotification();
          uiEvents.setSnackbar({ type: 'success', message: 'Notifications disabled' });
        } catch (e) {
          uiEvents.setSnackbar({ type: 'error', message: 'Something went wrong' });
        } finally {
          back();
        }
      },
    });
  }),
};

forward({
  from: mainEffects.checkOnboarding.doneData,
  to: mainEvents.checkOnboarding,
});
