import { back, useRouter } from '@blumjs/router';
import { PanelRoute, ViewRoute } from '@core/models';
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
    <View onSwipeBack={handleSwipeBack} activePanel={activePanel as keyof typeof PanelRoute} id={id}>
      {children}
    </View>
  );
});
