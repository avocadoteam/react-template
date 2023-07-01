import { back, useRouter } from '@blumjs/router';
import { PanelRoute, ViewRoute } from '@core/models';
import { View } from '@vkontakte/vkui';
import { ComponentProps, memo, useCallback } from 'react';

type Props = {
  id: ViewRoute;
} & Partial<ComponentProps<typeof View>>;

export const CustomLayout = memo<Props>(({ id, children }) => {
  const { activePanel } = useRouter();
  const handleSwipeBack = useCallback(() => {
    back();
  }, []);
  if (!children) {
    return <></>;
  }

  return (
    <View onSwipeBack={handleSwipeBack} activePanel={activePanel as keyof typeof PanelRoute} id={id}>
      {children}
    </View>
  );
});
