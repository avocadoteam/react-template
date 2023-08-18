import { useEventListener } from '@blumjs/hooks';
import { uiEvents } from '@core/modules/ui';

export const useResize = () => {
  useEventListener('resize', () => {
    uiEvents.setDimensions({ width: window.innerWidth, height: window.innerHeight });
  });
};
