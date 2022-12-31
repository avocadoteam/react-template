import { vkStorageInit } from '@core/vk-bridge';
import { useEffect } from 'react';

export const useVKStorage = () => {
  useEffect(() => {
    vkStorageInit();
  }, []);
};
