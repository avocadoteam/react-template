import { vkBridge } from '../instance';

export const getUserInfo = async (user_id?: number) => {
  return await vkBridge.send('VKWebAppGetUserInfo', user_id ? { user_id } : {}).catch(e => {
    console.log('vkBridge getUserInfo failed: ', e);
  });
};
