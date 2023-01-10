import { createEvent } from 'effector';

export const checkOnboardingEvent = createEvent();
export const setAppInit = createEvent<boolean>();
export const setUserSubscribedNotification = createEvent<boolean>();
