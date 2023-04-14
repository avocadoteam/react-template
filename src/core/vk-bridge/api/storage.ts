import { vkBridge } from '@blumjs/bridge';
import { StorageKey } from '@core/models';

export const setStorageValue = ({ key, value }: { key: string; value: any }) => {
  return vkBridge
    .send('VKWebAppStorageSet', { key, value: JSON.stringify(value) })
    .then(res => res.result)
    .catch(e => {
      console.log('vkBridge storageSet failed: ', e);
      return true;
    });
};

export const getStorageKeys = () => {
  return vkBridge
    .send('VKWebAppStorageGetKeys')
    .then(res => res.keys)
    .catch(e => {
      console.log('vkBridge getKeys failed: ', e);
      return [];
    });
};

export const getStorage = (keys: string[]) => {
  return vkBridge
    .send('VKWebAppStorageGet', { keys })
    .then(res => res.keys)
    .catch(e => {
      console.log('vkBridge get storage failed: ', e);
      return [{ key: StorageKey.IsCheckOnboarding, value: 'true' }];
    });
};
