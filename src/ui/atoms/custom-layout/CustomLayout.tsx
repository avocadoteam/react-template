import { useRouter } from '@core/hooks';
import { ViewRoute } from '@core/models';
import { back } from '@core/modules/router';
import { View } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';

type Props = {
  id: ViewRoute;
  children: React.ReactNode;
};

export const CustomLayout = memo<Props>(({ id, children }) => {
  const { activePanel } = useRouter();
  const handleSwipeBack = useCallback(() => {
    back();
  }, []);

  return (
    <View onSwipeBack={handleSwipeBack} activePanel={activePanel} id={id}>
      {children}
    </View>
  );
});
