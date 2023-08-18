import { createGetStateProp } from '@core/utils';
import { mainEvents } from './events';
import { $main } from './store';

const getStateProp = createGetStateProp($main);

describe('main module', () => {
  beforeEach(() => {
    mainEvents.setDefaultState();
  });

  test('event setAppInit(true) should set isAppInit to true', () => {
    mainEvents.setAppInit(true);
    expect(getStateProp('isAppInit')).toEqual(true);
  });
  test('event setAppInit(false) should set isAppInit to false', () => {
    mainEvents.setAppInit(true);
    mainEvents.setAppInit(false);
    expect(getStateProp('isAppInit')).toEqual(false);
  });

  test('event checkOnboarding should set isOnboardingChecked to true', () => {
    mainEvents.checkOnboarding();
    expect(getStateProp('isOnboardingChecked')).toEqual(true);
  });

  test('event setUserSubscribedNotification(true) should set isUserSubscribedNotification to true', () => {
    mainEvents.setUserSubscribedNotification(true);
    expect(getStateProp('isUserSubscribedNotification')).toEqual(true);
  });
  test('event setUserSubscribedNotification(false) should set isUserSubscribedNotification to false', () => {
    mainEvents.setUserSubscribedNotification(true);
    mainEvents.setUserSubscribedNotification(false);
    expect(getStateProp('isUserSubscribedNotification')).toEqual(false);
  });
});
