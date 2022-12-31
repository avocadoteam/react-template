import { createStore } from 'effector';
import { checkOnboardingEvent, setAppInit, setFetching, setUserSubscribedNotification } from './events';

type Store = {
  isAppInit: boolean;
  isFetching: boolean;
  isCheckOnboarding: boolean;
  isUserSubscribedNotification: boolean;
};

export const $main = createStore<Store>({
  isAppInit: false,
  isFetching: false,
  isCheckOnboarding: false,
  isUserSubscribedNotification: false,
})
  .on(setAppInit, (state, isAppInit) => ({
    ...state,
    isAppInit,
  }))
  .on(setFetching, (state, isFetching) => ({
    ...state,
    isFetching,
  }))
  .on(checkOnboardingEvent, state => ({
    ...state,
    isCheckTraining: true,
  }))
  .on(setUserSubscribedNotification, (state, isUserSubscribedNotification) => ({
    ...state,
    isUserSubscribedNotification,
  }));
