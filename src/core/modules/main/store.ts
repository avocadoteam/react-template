import { createStore } from 'effector';
import { mainEvents } from './events';

export type Store = {
  isAppInit: boolean;
  isOnboardingChecked: boolean;
  isUserSubscribedNotification: boolean;
};
const defaultStore: Store = {
  isAppInit: false,
  isOnboardingChecked: false,
  isUserSubscribedNotification: false,
};

export const $main = createStore<Store>({
  ...defaultStore,
})
  .on(mainEvents.setDefaultState, () => ({
    ...defaultStore,
  }))
  .on(mainEvents.setAppInit, (state, isAppInit) => ({
    ...state,
    isAppInit,
  }))
  .on(mainEvents.checkOnboarding, state => ({
    ...state,
    isOnboardingChecked: true,
  }))
  .on(mainEvents.setUserSubscribedNotification, (state, isUserSubscribedNotification) => ({
    ...state,
    isUserSubscribedNotification,
  }));
