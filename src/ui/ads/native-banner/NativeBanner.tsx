import { useRouter } from '@core/hooks';
import { PanelRoute, PopoutRoute } from '@core/models';
import { $main } from '@core/modules/main';
import { setActivePopout } from '@core/modules/router';
import { vkBridge } from '@core/vk-bridge';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

export const useNativeBanner = () => {
  const { activePanel } = useRouter();
  const { isAppInit } = useStore($main);
  useEffect(() => {
    if (activePanel === PanelRoute.Home && vkBridge.supports('VKWebAppShowNativeAds') && isAppInit) {
      setActivePopout(PopoutRoute.Loading);
      vkBridge
        //@ts-ignore
        .send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
        .then(res => {
          console.log('NativeBanner showed success', res);
          setActivePopout(null);
        })
        .catch(err => {
          console.log('NativeBanner showed failed', err);
          setActivePopout(null);
        });
    }
  }, [activePanel, isAppInit]);
};
