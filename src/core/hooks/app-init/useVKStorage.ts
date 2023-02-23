import { useRouter } from '@blumjs/router';
import { vkStorageInit } from '@core/vk-bridge';
import { useEffect } from 'react';

export const useVKStorage = () => {
  const { isRouteInit } = useRouter();
  useEffect(() => {
    if (isRouteInit) {
      vkStorageInit();
    }
  }, [isRouteInit]);
};
