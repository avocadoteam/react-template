import { PanelRoute, PopoutRoute } from '@core/models';
import { closeApp } from '@core/vk-bridge';
import { useConnection } from './useConnection';
import { useResize } from './useResize';
import { createDisableBackBrowserRouteMiddleware, createRouteMiddleware, useInitRouter } from './useRoutes';
import { useTheme } from './useTheme';
import { useVKStorage } from './useVKStorage';

export const useAppInit = () => {
  useInitRouter(
    createRouteMiddleware((storeRoutes, hashRoutes) => {
      return (
        storeRoutes.view !== hashRoutes.view ||
        storeRoutes.panel !== hashRoutes.panel ||
        storeRoutes.modal !== hashRoutes.modal ||
        storeRoutes.popout !== hashRoutes.modal
      );
    }),
    createDisableBackBrowserRouteMiddleware(PopoutRoute.Loading),
    createDisableBackBrowserRouteMiddleware(PanelRoute.Home, closeApp),
    createRouteMiddleware(storeRoutes => {
      if (!window.location.hash) {
        closeApp();
        return false;
      }
      if (navigator.onLine) {
        return true;
      }
      window.location.assign(`#${storeRoutes.view}/${storeRoutes.panel}/null/null`);
      return false;
    }),
  );
  useTheme();
  useResize();
  useConnection();
  useVKStorage();
};
