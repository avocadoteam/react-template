import { useEventListener } from '@blumjs/hooks';
import { setDimensions } from '@core/modules/ui';

export const useResize = () => {
  useEventListener('resize', () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  });
};
