import { setDimensions } from '@core/modules/ui';
import { useEventListener } from '../useEventListener';

export const useResize = () => {
  useEventListener('resize', () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  });
};
