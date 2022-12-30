import { PanelRoute, PopoutRoute } from '@core/models';
import { closeApp } from '@core/vk-bridge';
import { useConnection } from './useConnection';
import { useInit } from './useInit';
import { useResize } from './useResize';
import { createDisableBackRouteMiddleware, createRouteMiddleware, useInitRouter } from './useRoutes';
import { useTheme } from './useTheme';

export const useAppInit = () => {
  useInit();
  useTheme();
  useResize();
  useInitRouter(
    createDisableBackRouteMiddleware(PopoutRoute.Loading),
    createDisableBackRouteMiddleware(PanelRoute.Home, closeApp),
    createRouteMiddleware(storeRoutes => {
      if (navigator.onLine) {
        return true;
      }
      window.location.assign(`#${storeRoutes.view}/${storeRoutes.panel}/null/null`);
      return false;
    }),
  );
  useConnection();
};
