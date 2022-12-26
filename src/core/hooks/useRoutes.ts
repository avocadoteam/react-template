import { ModalRoute, PanelRoute, PopoutRoute, ViewRoute } from '@core/models';
import { $router, setActiveModal, setActivePanel, setActivePopout, setActiveView } from '@core/modules/router';
import { vkBridge } from '@core/vk-bridge';
import { useStore } from 'effector-react';
import { useCallback, useEffect } from 'react';
import { useEventListener } from './useEventListener';

export const useInitRouter = (...middlewares: RouteMiddleware[]) => {
  const { activeView, activePanel, activeModal, activePopout } = useRouter();
  useEffect(() => {
    window.location.assign(`#${activeView}/${activePanel}/${activeModal}/${activePopout}`);
  }, [activeView, activePanel, activeModal]);

  const handleHashChange = useCallback(async () => {
    const [view, panel, modal, popout] = window.location.hash
      .slice(1)
      .split('/')
      .map(h => (h === 'null' ? null : h)) as [ViewRoute, PanelRoute, ModalRoute | null, PopoutRoute | null];
    console.log('prevRoutes', activeView, activePanel, activeModal, activePopout);
    console.log('nextRoutes', view, panel, modal, popout);

    for (const i in middlewares) {
      const res = await middlewares[i](
        { view: activeView, panel: activePanel, modal: activeModal, popout: activePopout },
        { view, panel, modal, popout },
      );
      if (!res) {
        return;
      }
    }
    if (activePanel === PanelRoute.Home && activePanel !== panel) {
      console.log('start close app');
      vkBridge
        .send('VKWebAppClose', { status: 'success' })
        .then(() => console.log('app closed'))
        .catch((e: any) => console.log('failed to close, vk bridge error:', e));
      return;
    }
    if (view && panel && navigator.onLine) {
      setActiveView(view);
      setActivePanel(panel);
      setActiveModal(modal);
      setActivePopout(popout);
    } else {
      window.location.assign(`#${activeView}/${activePanel}/null/null`);
    }
  }, [activeView, activePanel, activeModal, activePopout]);
  useEventListener('hashchange', handleHashChange, [activeView, activePanel, activeModal, activePopout]);
};

export const useRouter = () => useStore($router);

export const createRouteMiddleware = (callback: RouteMiddleware) => callback;
export const createDisableBackRouteMiddleware = (
  route: ViewRoute | PanelRoute | ModalRoute | PopoutRoute,
  callback?: (prevRoutes: Routes, nextRoutes: Routes) => void | Promise<void>,
) => {
  return (prevRoutes: Routes, nextRoutes: Routes) => {
    const routes: (keyof Routes)[] = ['view', 'panel', 'modal', 'popout'];
    if (routes.some(r => prevRoutes[r] === route && prevRoutes[r] !== nextRoutes[r])) {
      if (callback) {
        callback(prevRoutes, nextRoutes);
      }
      return false;
    }
    return true;
  };
};

type Routes = { view: ViewRoute; panel: PanelRoute; modal: ModalRoute | null; popout: PopoutRoute | null };
type RouteMiddleware = (prevRoutes: Routes, nextRoutes: Routes) => boolean | Promise<boolean>;
