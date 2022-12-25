import { PanelRoute, ViewRoute } from '@core/models';
import { setActivePanel, setActiveView } from '@core/modules/router';
import { useCallback } from 'react';
import { useEventListener } from './useEventListener';

export const useConnection = () => {
  const handleOffline = useCallback(() => {
    setActiveView(ViewRoute.ConnectionError);
    setActivePanel(PanelRoute.Offline);
  }, []);
  useEventListener('offline', handleOffline);
};
