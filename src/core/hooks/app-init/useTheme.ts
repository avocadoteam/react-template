import { $ui } from '@core/modules/ui';
import { vkBridge } from '@core/vk-bridge';
import { darkTheme, lightTheme, vars } from '@ui/theme';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

export const useTheme = () => {
  const { appearance } = useUI();
  useEffect(() => {
    const body = window.document.getElementsByTagName('body')[0];
    if (appearance === 'dark') {
      body.setAttribute('class', body.className.replace(lightTheme, '') + ' ' + darkTheme);
    } else {
      body.setAttribute('class', body.className.replace(darkTheme, '') + ' ' + lightTheme);
    }
    if (vkBridge.supports('VKWebAppSetViewSettings')) {
      const isLight = appearance === 'light';
      vkBridge.send('VKWebAppSetViewSettings', {
        status_bar_style: isLight ? 'dark' : 'light',
        action_bar_color: vars.all.panelBackground,
      });
    }
  }, [appearance]);
};

export const useUI = () => useStore($ui);
