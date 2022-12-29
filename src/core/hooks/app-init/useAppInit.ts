import { useConnection } from './useConnection';
import { useInit } from './useInit';
import { useResize } from './useResize';
import { useInitRouter } from './useRoutes';
import { useTheme } from './useTheme';

export const useAppInit = () => {
  useInit();
  useTheme();
  useResize();
  useInitRouter();
  useConnection();
};
