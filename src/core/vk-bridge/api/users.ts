import { UserInfo } from '@vkontakte/vk-bridge';
import { vkBridge, vkCallApiMethod } from '../instance';

export const getUserInfo = async (user_id?: number) => {
  return await vkBridge.send('VKWebAppGetUserInfo', user_id ? { user_id } : {}).catch(e => {
    console.log('vkBridge getUserInfo failed: ', e);
  });
};

export const getVKUsers = async (ids: number[]) => {
  const user_ids = [...new Set(ids)];

  const i = Math.floor(user_ids.length / 100);
  const users: UserInfo[] = [];
  if (user_ids.length > 0) {
    for (let j = 0; j < i + 1; j++) {
      const newUsers = await vkCallApiMethod('users.get', {
        user_ids: user_ids.slice(j * 100, j * 100 + 100).join(','),
        fields: ['screen_name', 'photo_100', 'photo_200', 'photo_max_orig', 'sex', 'first_name', 'last_name'].join(','),
      });
      users.push.apply(users, newUsers);
    }
  }
  return users;
};
