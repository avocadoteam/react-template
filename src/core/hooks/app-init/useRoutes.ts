import { ModalRoute, PanelRoute, PopoutRoute, ViewRoute } from '@core/models';
import { $router, setActiveModal, setActivePanel, setActivePopout, setActiveView } from '@core/modules/router';
import { useStore } from 'effector-react';
import { useCallback, useEffect } from 'react';
import { useEventListener } from '../useEventListener';

export const useInitRouter = (...middlewares: RouteMiddleware[]) => {
  const { activeView, activePanel, activeModal, activePopout } = useRouter();
  useEffect(() => {
    window.location.assign(`#${activeView}/${activePanel}/${activeModal}/${activePopout}`);
  }, [activeView, activePanel, activeModal, activePopout]);

  const handleHashChange = useCallback(async () => {
    const [view, panel, modal, popout] = window.location.hash
      .slice(1)
      .split('/')
      .map(h => (h === 'null' ? null : h)) as [ViewRoute, PanelRoute, ModalRoute | null, PopoutRoute | null];
    console.log('storeRoutes', activeView, activePanel, activeModal, activePopout);
    console.log('hashRoutes', view, panel, modal, popout);

    for (const i in middlewares) {
      const res = await middlewares[i](
        { view: activeView, panel: activePanel, modal: activeModal, popout: activePopout },
        { view, panel, modal, popout },
      );
      if (!res) {
        return;
      }
    }
    setActiveView(view);
    setActivePanel(panel);
    setActiveModal(modal);
    setActivePopout(popout);
  }, [activeView, activePanel, activeModal, activePopout]);
  useEventListener('hashchange', handleHashChange, [activeView, activePanel, activeModal, activePopout]);
};

export const useRouter = () => useStore($router);

export const createRouteMiddleware = (callback: RouteMiddleware) => callback;
export const createDisableBackRouteMiddleware = (
  route: ViewRoute | PanelRoute | ModalRoute | PopoutRoute,
  callback?: (storeRoutes: Routes, hashRoutes: Routes) => void | Promise<void>,
) => {
  return (storeRoutes: Routes, hashRoutes: Routes) => {
    const routes: (keyof Routes)[] = ['view', 'panel', 'modal', 'popout'];
    if (routes.some(r => storeRoutes[r] === route && storeRoutes[r] !== hashRoutes[r])) {
      if (callback) {
        callback(storeRoutes, hashRoutes);
      }
      return false;
    }
    return true;
  };
};

type Routes = { view: ViewRoute; panel: PanelRoute; modal: ModalRoute | null; popout: PopoutRoute | null };
type RouteMiddleware = (storeRoutes: Routes, hashRoutes: Routes) => boolean | Promise<boolean>;
