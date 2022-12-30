import { useAppInit } from '@core/hooks';
import { $ui } from '@core/modules/ui';
import { PromoBanner, useNativeBanner } from '@ui/ads';
import { AppLayout } from '@ui/app-layout/AppLayout';
import { Snackbars } from '@ui/snackbars';
import '@ui/theme/fonts.css';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useStore } from 'effector-react';

export const App = () => {
  useAppInit();
  useNativeBanner();
  const { appearance } = useStore($ui);

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppLayout />
        <Snackbars />
        <PromoBanner />
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
