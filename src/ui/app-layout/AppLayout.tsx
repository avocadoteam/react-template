import { useRouter } from '@core/hooks';
import { ViewRoute } from '@core/models';
import { ConnectionErrorLayout } from '@ui/layouts/connection-error';
import { MainLayout } from '@ui/layouts/main';
import { ModalLayout } from '@ui/layouts/modal';
import { PopoutLayout } from '@ui/layouts/popout';
import { AppRoot, Root, SplitCol, SplitLayout } from '@vkontakte/vkui';
import { memo } from 'react';

export const AppLayout = memo(() => {
  const { activeView, activePopout } = useRouter();

  return (
    <AppRoot>
      <SplitLayout modal={<ModalLayout />} popout={activePopout ? <PopoutLayout /> : null}>
        <SplitCol animate>
          <Root activeView={activeView}>
            <MainLayout id={ViewRoute.Main} />
            <ConnectionErrorLayout id={ViewRoute.ConnectionError} />
          </Root>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
});
