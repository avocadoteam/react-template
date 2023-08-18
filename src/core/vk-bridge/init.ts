import { vkBridge } from '@blumjs/bridge';
import { setActiveModal } from '@blumjs/router';
import { getSearchParams } from '@blumjs/utils';
import { ModalRoute, StorageKey } from '@core/models';
import { mainEvents } from '@core/modules/main';
import { uiEvents } from '@core/modules/ui';
import { DefaultUpdateConfigData } from '@vkontakte/vk-bridge';
import { getStorage } from './api';

export const vkBridgeInit = () => {
  vkBridge.subscribe(async ({ detail }) => {
    const { type, data } = detail;
    if (type === 'VKWebAppUpdateConfig') {
      const d = data as DefaultUpdateConfigData;

      uiEvents.setAppearance(d.appearance);

      const searchParams = getSearchParams();
      mainEvents.setUserSubscribedNotification(!!+(searchParams.get('vk_are_notifications_enabled') as string));
    }
    if (type === 'VKWebAppDenyNotificationsResult') {
      mainEvents.setUserSubscribedNotification(false);
    }
    if (type === 'VKWebAppAllowNotificationsResult') {
      mainEvents.setUserSubscribedNotification(true);
    }
  });
  vkBridge.send('VKWebAppInit');
};

export const vkStorageInit = () => {
  getStorage(Object.values(StorageKey)).then(async res => {
    for (let i = 0; i < res.length; i++) {
      await handleKey(res[i]);
    }
    mainEvents.setAppInit(true);
  });
};
const handleKey = async ({ key, value }: { key: string; value: string }) => {
  const parsedValue = value ? await JSON.parse(value) : null;
  console.log('vk storage[key][value]: ', key, parsedValue);
  switch (key) {
    case StorageKey.IsCheckOnboarding:
      if (parsedValue) {
        mainEvents.checkOnboarding();
      } else {
        setActiveModal(ModalRoute.Onboarding);
      }
      break;
  }
};
