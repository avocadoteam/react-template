import { vkBridge } from '../instance';

export const allowNotification = async () => {
  return await vkBridge.send('VKWebAppAllowNotifications');
};

export const denyNotification = async () => {
  return await vkBridge.send('VKWebAppDenyNotifications');
};
