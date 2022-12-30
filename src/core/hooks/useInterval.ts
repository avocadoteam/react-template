import { useEffect, useState } from 'react';

export const useInterval = (callback: () => void, delay: number, deps?: any[]) => {
  const [intervalId, setIntervalId] = useState<any>(null);
  useEffect(
    () => {
      clearInterval(intervalId);
      setIntervalId(
        setInterval(() => {
          callback();
        }, delay),
      );

      return () => {
        clearInterval(intervalId);
      };
    },
    deps ? [delay, ...deps] : [delay],
  );
};
