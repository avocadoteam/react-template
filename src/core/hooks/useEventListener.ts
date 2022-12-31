import { useEffect } from 'react';
import { usePrevious } from './usePrevious';

export const useEventListener = (eventType: string, callback: (e: any) => void, dependecies?: any[]) => {
  const prevCallback = usePrevious<(e: any) => void>(callback);
  useEffect(
    () => {
      window.removeEventListener(eventType, prevCallback);
      window.removeEventListener(eventType, callback);
      window.addEventListener(eventType, callback);
      return () => window.removeEventListener(eventType, callback);
    },
    dependecies ? [...dependecies] : [],
  );
};
