import { createEvent } from 'effector';

export const mainEvents = {
  setDefaultState: createEvent(),
  checkOnboarding: createEvent(),
  setAppInit: createEvent<boolean>(),
  setUserSubscribedNotification: createEvent<boolean>(),
};
