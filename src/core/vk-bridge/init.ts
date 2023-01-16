import { ModalRoute, PopoutRoute, StorageKey } from '@core/models';
import { checkOnboardingEvent, setAppInit, setUserSubscribedNotification } from '@core/modules/main';
import { back, setActiveModal, setActivePopout } from '@core/modules/router';
import { setAppearance } from '@core/modules/ui';
import { getSearchParams } from '@core/utils';
import { DefaultUpdateConfigData } from '@vkontakte/vk-bridge';
import { getStorage } from './api';
import { vkBridge } from './instance';

export const vkBridgeInit = () => {
  vkBridge.subscribe(({ detail }) => {
    const { type, data } = detail;
    if (type === 'VKWebAppUpdateConfig') {
      const d = data as DefaultUpdateConfigData;
      setAppearance(d.appearance);
      const searchParams = getSearchParams();
      setUserSubscribedNotification(!!+(searchParams.get('vk_are_notifications_enabled') as string));
    }
    if (type === 'VKWebAppDenyNotificationsResult') {
      setUserSubscribedNotification(false);
    }
    if (type === 'VKWebAppAllowNotificationsResult') {
      setUserSubscribedNotification(true);
    }
  });
  vkBridge.send('VKWebAppInit');
};

export const vkStorageInit = () => {
  setActivePopout(PopoutRoute.Loading);
  getStorage(Object.values(StorageKey)).then(res => {
    back();
    const timeoutId = setTimeout(async () => {
      for (let i = 0; i < res.length; i++) {
        await handleKey(res[i]);
      }
      setAppInit(true);
      clearTimeout(timeoutId);
    }, 1000);
  });
};
const handleKey = async ({ key, value }: { key: string; value: string }) => {
  const parsedValue = value ? await JSON.parse(value) : null;
  console.log('vk storage[key][value]: ', key, parsedValue);
  switch (key) {
    case StorageKey.IsCheckOnboarding:
      if (parsedValue) {
        checkOnboardingEvent();
      } else {
        setActiveModal(ModalRoute.Onboarding);
      }
      break;
  }
};
