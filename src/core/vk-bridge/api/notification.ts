import { vkBridge } from '../instance';

export const allowNotification = () => vkBridge.send('VKWebAppAllowNotifications');

export const denyNotification = () => vkBridge.send('VKWebAppDenyNotifications');
