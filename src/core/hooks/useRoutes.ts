import { ModalRoute, PanelRoute, ViewRoute } from '@core/models';
import { $router, setActiveModal, setActivePanel, setActiveView } from '@core/modules/router';
import { vkBridge } from '@core/vk-bridge';
import { useStore } from 'effector-react';
import { useCallback, useEffect } from 'react';
import { useEventListener } from './useEventListener';

export const useInitRouter = () => {
  const { activeView, activePanel, activeModal } = useRouter();
  useEffect(() => {
    window.location.assign(`#${activeView}/${activePanel}/${activeModal}`);
  }, [activeView, activePanel, activeModal]);
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    const [view, panel, modal] = hash.slice(1).split('/');
    console.log('prevRoutes', activeView, activePanel, activeModal);
    console.log('nextRoutes', view, panel, modal);

    if (activePanel === PanelRoute.Home && activePanel !== panel) {
      console.log('start close app');
      vkBridge
        .send('VKWebAppClose', { status: 'success' })
        .then(() => console.log('app closed'))
        .catch((e: any) => console.log('failed to close, vk bridge error:', e));
      return;
    }
    if (view && panel && navigator.onLine) {
      setActiveModal(modal === 'null' ? null : (modal as unknown as ModalRoute));
      setActiveView(view as unknown as ViewRoute);
      setActivePanel(panel as unknown as PanelRoute);
    } else {
      window.location.assign(`#${activeView}/${activePanel}/null`);
    }
  }, [activeView, activePanel, activeModal]);
  useEventListener('hashchange', handleHashChange, [activeView, activePanel, activeModal]);
};

export const useRouter = () => {
  return useStore($router);
};
