import { vkBridge } from '@blumjs/bridge';
import { useInterval } from '@blumjs/hooks';
import { useRouter } from '@blumjs/router';
import { PanelRoute } from '@core/models';
import { $main } from '@core/modules/main';
import { BannerAdLocation } from '@vkontakte/vk-bridge';
import { useStore } from 'effector-react';

export const usePromoBanner = () => {
  const { isAppInit } = useStore($main);
  const { activePanel } = useRouter();
  useInterval(
    () => {
      if (process.env.NODE_ENV === 'production' && activePanel === PanelRoute.Home && isAppInit) {
        vkBridge
          .send('VKWebAppShowBannerAd', { banner_location: BannerAdLocation.BOTTOM })
          .then(data => {
            if (data.result) {
              console.log('Add Banner successful', data);
            } else {
              console.log('Add Banner error', data);
            }
          })
          .catch((e: any) => {
            console.log('Add block: ', e);
          });
      }
    },
    30000,
    [isAppInit],
  );
};
