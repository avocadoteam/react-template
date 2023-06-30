import { createStore } from 'effector';
import { checkOnboardingEvent, setAppInit, setUserSubscribedNotification } from './events';

type Store = {
  isAppInit: boolean;
  isOnboardingChecked: boolean;
  isUserSubscribedNotification: boolean;
};

export const $main = createStore<Store>({
  isAppInit: false,
  isOnboardingChecked: false,
  isUserSubscribedNotification: false,
})
  .on(setAppInit, (state, isAppInit) => ({
    ...state,
    isAppInit,
  }))
  .on(checkOnboardingEvent, state => ({
    ...state,
    isOnboardingChecked: true,
  }))
  .on(setUserSubscribedNotification, (state, isUserSubscribedNotification) => ({
    ...state,
    isUserSubscribedNotification,
  }));
