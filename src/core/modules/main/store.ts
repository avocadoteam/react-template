import { createStore } from "effector";
import { checkOnboardingEvent, setAppInit, setFetching } from "./events";

type Store = {
  isAppInit: boolean;
  isFetching: boolean;
  isCheckOnboarding: boolean;
};

export const $main = createStore<Store>({
  isAppInit: false,
  isFetching: false,
  isCheckOnboarding: false,
})
  .on(setAppInit, (state, isAppInit) => ({
    ...state,
    isAppInit,
  }))
  .on(setFetching, (state, isFetching) => ({
    ...state,
    isFetching,
  }))
  .on(checkOnboardingEvent, (state) => ({
    ...state,
    isCheckTraining: true,
  }));
