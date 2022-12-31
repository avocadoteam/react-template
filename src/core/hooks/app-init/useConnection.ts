import { PanelRoute, ViewRoute } from '@core/models';
import { _setActiveModal, _setActivePopout, back, setActivePanel, setActiveView } from '@core/modules/router';
import { vkBridgeInit } from '@core/vk-bridge';
import { useCallback } from 'react';
import { useEventListener } from '../useEventListener';

export const useConnection = () => {
  const handleOffline = useCallback(() => {
    setActiveView(ViewRoute.ConnectionError);
    setActivePanel(PanelRoute.Offline);
    _setActiveModal(null);
    _setActivePopout(null);
  }, []);
  const handleOnline = useCallback(() => {
    back();
    vkBridgeInit();
  }, []);
  useEventListener('offline', handleOffline);
  useEventListener('online', handleOnline);
};
