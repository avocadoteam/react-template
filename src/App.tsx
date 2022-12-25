import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import { ThemeContext, theme } from '@core/contexts';
import { useEventListener, useInitRouter } from '@core/hooks';
import { $ui, setHeight } from '@core/modules/ui';
import { AppLayout } from '@ui/app-layout/AppLayout';
import { useStore } from 'effector-react';

export const App = () => {
  useInitRouter();
  useEventListener('resize', () => setHeight(window.innerHeight));
  const { appearance } = useStore($ui);

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <ThemeContext.Provider value={theme[appearance]}>
          <AppLayout />
        </ThemeContext.Provider>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
