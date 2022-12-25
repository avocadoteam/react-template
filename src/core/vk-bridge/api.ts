import { StorageKey } from '@core/models';
import { UserInfo } from '@vkontakte/vk-bridge';
import { vkBridge } from './instance';

export const setStorageValue = async ({ key, value }: { key: string; value: any }) => {
  return vkBridge
    .send('VKWebAppStorageSet', { key, value: JSON.stringify(value) })
    .then(res => res.result)
    .catch(e => {
      console.log('vkBridge storageSet failed: ', e);
      return true;
    });
};

export const getStorageKeys = async () => {
  return vkBridge
    .send('VKWebAppStorageGetKeys')
    .then(res => res.keys)
    .catch(e => {
      console.log('vkBridge getKeys failed: ', e);
      return [];
    });
};

export const getStorage = async (keys: string[]) => {
  return vkBridge
    .send('VKWebAppStorageGet', { keys })
    .then(res => res.keys)
    .catch(e => {
      console.log('vkBridge get storage failed: ', e);
      return [{ key: StorageKey.IsCheckOnboarding, value: 'true' }];
    });
};

export const getUserInfo = async (user_id?: number) => {
  return await vkBridge.send('VKWebAppGetUserInfo', user_id ? { user_id } : {}).catch(e => {
    console.log('vkBridge getUserInfo failed: ', e);
  });
};

export const getVKUsers = async (userIds: number[]) => {
  let users: UserInfo[] = [];
  for (let i = 0; i < userIds.length; i++) {
    try {
      const userId = userIds[i];
      const user = (await getUserInfo(userId)) as UserInfo;
      users.push(user);
    } catch (e) {
      console.log(e);
    }
  }
  return users;
};
