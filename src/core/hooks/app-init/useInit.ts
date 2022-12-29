import { PanelRoute, PopoutRoute, StorageKey, ViewRoute } from '@core/models';
import { checkOnboardingEvent, setAppInit } from '@core/modules/main';
import { setActivePanel, setActivePopout, setActiveView } from '@core/modules/router';
import { getStorage } from '@core/vk-bridge';
import { useEffect } from 'react';

export const useInit = () => {
  useEffect(() => {
    setActivePopout(PopoutRoute.Loading);
    getStorage(Object.values(StorageKey)).then(async res => {
      for (let i = 0; i < res.length; i++) {
        await handleKey(res[i]);
      }
      setActivePopout(null);
      setAppInit(true);
    });
  }, []);
};

const handleKey = async ({ key, value }: { key: string; value: string }) => {
  const parsedValue = value ? await JSON.parse(value) : null;
  console.log('vk storage[key][value]: ', key, parsedValue);
  switch (key) {
    case StorageKey.IsCheckOnboarding:
      if (parsedValue) {
        checkOnboardingEvent();
      } else {
        setActiveView(ViewRoute.Onboarding);
        setActivePanel(PanelRoute.Welcome);
      }
      break;
  }
};
