import { closeApp } from '@blumjs/bridge';
import { createDisableBackBrowserRouteMiddleware, createRouteMiddleware, useInitRouter } from '@blumjs/router';
import { PanelRoute, PopoutRoute, ViewRoute } from '@core/models';
import { useConnection } from './useConnection';
import { useResize } from './useResize';
import { useTheme } from './useTheme';
import { useVKStorage } from './useVKStorage';

export const useAppInit = () => {
  useInitRouter(
    {
      view: ViewRoute.Main,
      panel: PanelRoute.Home,
      modal: null,
      popout: null,
    },
    createDisableBackBrowserRouteMiddleware(PopoutRoute.Loading),
    createDisableBackBrowserRouteMiddleware(PanelRoute.Home, closeApp),
    createRouteMiddleware(storeRoutes => {
      if (!window.history.state || window.history.state.view === undefined) {
        closeApp();
        return false;
      }
      if (navigator.onLine) {
        return true;
      }
      window.history.pushState({ ...storeRoutes, modal: null, popout: null }, '');
      return false;
    }),
  );
  useTheme();
  useResize();
  useConnection();
  useVKStorage();
};
