import { vkBridge } from '@blumjs/bridge';
import { back, setActivePopout, useRouter } from '@blumjs/router';
import { PanelRoute, PopoutRoute } from '@core/models';
import { $main } from '@core/modules/main';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

export const useNativeBanner = () => {
  const { activePanel, activePopout } = useRouter();
  const { isAppInit } = useStore($main);
  useEffect(() => {
    if (activePanel === PanelRoute.Home && vkBridge.supports('VKWebAppShowNativeAds') && isAppInit && !activePopout) {
      const timerId = setTimeout(() => {
        setActivePopout(PopoutRoute.Loading);
        vkBridge
          //@ts-ignore
          .send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
          .then(res => {
            console.log('NativeBanner showed success', res);
            back();
          })
          .catch(err => {
            console.log('NativeBanner showed failed', err);
            back();
          });
        clearTimeout(timerId);
      }, 200);
    }
  }, [isAppInit, activePanel]);
};
