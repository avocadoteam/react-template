import { useEventListener } from '@blumjs/hooks';
import { _setActiveModal, _setActivePopout, back, setActivePanel, setActiveView } from '@blumjs/router';
import { PanelRoute, ViewRoute } from '@core/models';
import { vkBridgeInit } from '@core/vk-bridge';
import { useCallback } from 'react';

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
