import { useRouter } from '@core/hooks';
import { AppRoot, Root, SplitCol, SplitLayout } from '@vkontakte/vkui';
import { memo } from 'react';

export const AppLayout = memo(() => {
  const { activeView } = useRouter();

  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol animate>
          <Root activeView={activeView}></Root>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
});
