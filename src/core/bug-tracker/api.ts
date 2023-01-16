import { StorageKey } from '@core/models';
import { setStorageValue } from '@core/vk-bridge';

export const dropOnboarding = () => {
  setStorageValue({ key: StorageKey.IsCheckOnboarding, value: false });
};
