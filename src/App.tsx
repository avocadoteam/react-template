import { useAppInit, useUI } from '@core/hooks';
import { PromoBanner, useNativeBanner } from '@ui/ads';
import { AppLayout } from '@ui/app-layout';
import { Snackbars } from '@ui/snackbars';
import '@ui/theme/fonts.css';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export const App = () => {
  useAppInit();
  useNativeBanner();
  const { appearance } = useUI();

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
