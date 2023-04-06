import { useInterval } from '@blumjs/hooks';
import { useRouter } from '@blumjs/router';
import { PanelRoute } from '@core/models';
import { $main } from '@core/modules/main';
import { vkBridge } from '@core/vk-bridge';
import { PromoBanner as VKPromoBanner } from '@vkontakte/vkui';
import { useStore } from 'effector-react';
import { memo, useCallback, useMemo, useState } from 'react';

export const PromoBanner = memo(() => {
  const panels = useMemo(() => [PanelRoute.Home], []);
  const { isAppInit } = useStore($main);
  const { activePanel } = useRouter();
  const [banners, setBanners] = useState<(null | any)[]>(new Array(panels.length).fill(null));
  const handleClose = useCallback(
    (i: number) => () => {
      setBanners(prev => prev.map((b, index) => (i === index ? null : b)));
    },
    [],
  );
  useInterval(
    () => {
      if (isAppInit) {
        panels.forEach((v, i) => {
          (vkBridge as any)
            .send('VKWebAppGetAds', {})
            .then((data: any) => {
              if (!banners[i]) {
                setBanners(prev => prev.map((b, index) => (i === index ? data : b)));
              }
            })
            .catch((e: any) => {
              console.log('Add block: ', e);
              handleClose(i)();
            });
        });
      }
    },
    30000,
    [isAppInit],
  );

  return (
    <>
      {banners.map(
        (b, index) => b && activePanel === panels[index] && <VKPromoBanner bannerData={b} onClose={handleClose(index)} />,
      )}
    </>
  );
});
