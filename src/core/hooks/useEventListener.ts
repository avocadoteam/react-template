import { useEffect } from 'react';
import { usePrevious } from './usePrevious';

export const useEventListener = <T extends keyof WindowEventMap>(
  eventType: T,
  callback: (e: WindowEventMap[T]) => void,
  dependecies?: any[],
) => {
  const prevCallback = usePrevious<(e: WindowEventMap[T]) => void>(callback);
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
