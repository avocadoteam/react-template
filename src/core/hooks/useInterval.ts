import { useEffect, useState } from 'react';

export const useInterval = (callback: () => void, delay: number, deps?: any[]) => {
  const [intervalId, setIntervalId] = useState<any>(null);
  useEffect(
    () => {
      clearInterval(intervalId);
      const newIntervalId = setInterval(callback, delay);
      setIntervalId(newIntervalId);

      return () => {
        clearInterval(newIntervalId);
      };
    },
    deps ? [delay, ...deps] : [delay],
  );
};
