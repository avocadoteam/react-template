import { useEffect, useState } from 'react';

export const useTimeout = (callback: () => void, delay: number, deps?: any[]) => {
  const [timeoutId, setTimeoutId] = useState<any>(null);
  useEffect(
    () => {
      clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        callback();
        clearTimeout(newTimeoutId);
      }, delay);
      setTimeoutId(newTimeoutId);

      return () => {
        clearTimeout(newTimeoutId);
      };
    },
    deps ? [delay, ...deps] : [delay],
  );
};
