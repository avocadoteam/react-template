import { vkBridge } from '../instance';

export const occureTapticEngine = (style: 'light' | 'medium' | 'heavy') => {
  if (vkBridge.supports('VKWebAppTapticImpactOccurred')) {
    vkBridge.send('VKWebAppTapticImpactOccurred', {
      style,
    });
  }
};

export const closeApp = () => {
  vkBridge
    .send('VKWebAppClose', { status: 'success' })
    .then(() => console.log('app closed'))
    .catch((e: any) => console.log('failed to close, vk bridge error:', e));
};

export const shareLink = (link: string) => {
  vkBridge
    .send('VKWebAppShare', { link })
    .then(res => console.log('share successfull', res))
    .catch(err => console.log('share failed', err));
};
