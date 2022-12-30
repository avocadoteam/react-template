import { accessToken } from '@core/constants';
import vkBridge from '@vkontakte/vk-bridge';

export { vkBridge };

export const vkCallApiMethod = async (method: string, params = {}) => {
  return (
    await vkBridge.send('VKWebAppCallAPIMethod', {
      method,
      params: {
        ...params,
        v: '5.126',
        access_token: accessToken,
      },
    })
  ).response;
};
