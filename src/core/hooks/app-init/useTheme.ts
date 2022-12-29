import { $ui } from '@core/modules/ui';
import { darkTheme, lightTheme } from '@ui/theme/theme.css';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

export const useTheme = () => {
  const { appearance } = useStore($ui);
  useEffect(() => {
    const body = window.document.getElementsByTagName('body')[0];
    if (appearance === 'dark') {
      body.setAttribute('class', body.className.replace(lightTheme, '') + ' ' + darkTheme);
    } else {
      body.setAttribute('class', body.className.replace(darkTheme, '') + ' ' + lightTheme);
    }
  }, [appearance]);
};
