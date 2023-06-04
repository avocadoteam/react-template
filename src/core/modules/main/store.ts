import { createStore } from 'effector';
import { checkOnboardingEvent, setAppInit, setUserSubscribedNotification } from './events';

type Store = {
  isAppInit: boolean;
  isCheckOnboarding: boolean;
  isUserSubscribedNotification: boolean;
};

export const $main = createStore<Store>({
  isAppInit: false,
  isCheckOnboarding: false,
  isUserSubscribedNotification: false,
})
  .on(setAppInit, (state, isAppInit) => ({
    ...state,
    isAppInit,
  }))
  .on(checkOnboardingEvent, state => ({
    ...state,
    isCheckOnboarding: true,
  }))
  .on(setUserSubscribedNotification, (state, isUserSubscribedNotification) => ({
    ...state,
    isUserSubscribedNotification,
  }));
