import { createEvent } from "effector";

export const setFetching = createEvent<boolean>();
export const checkOnboardingEvent = createEvent();
export const setAppInit = createEvent<boolean>();
