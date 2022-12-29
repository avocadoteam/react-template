import { useAppInit } from '@core/hooks';
import { $ui } from '@core/modules/ui';
import { AppLayout } from '@ui/app-layout/AppLayout';
import '@ui/theme/fonts.css';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { useStore } from 'effector-react';

export const App = () => {
  useAppInit();
  const { appearance } = useStore($ui);

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppLayout />
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
