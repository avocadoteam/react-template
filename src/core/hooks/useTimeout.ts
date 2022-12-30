import { useEffect, useState } from 'react';

export const useTimeout = (callback: () => void, delay: number, deps?: any[]) => {
  const [timerId, setTimerId] = useState<any>(null);
  useEffect(
    () => {
      clearTimeout(timerId);
      setTimerId(
        setTimeout(() => {
          callback();
          clearTimeout(timerId);
        }, delay),
      );

      return () => {
        clearTimeout(timerId);
      };
    },
    deps ? [delay, ...deps] : [delay],
  );
};
