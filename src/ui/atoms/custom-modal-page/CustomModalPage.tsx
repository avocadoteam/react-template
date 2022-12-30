import { ModalRoute } from '@core/models';
import { back } from '@core/modules/router';
import { Icon24Dismiss } from '@vkontakte/icons';
import { ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, usePlatform } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';

type Props = {
  id: ModalRoute;
  children: React.ReactNode;
};

export const CustomModalPage = memo<Props>(({ id, children }) => {
  const platform = usePlatform();
  const handleClose = useCallback(() => {
    back();
  }, []);

  return (
    <ModalPage
      id={id}
      settlingHeight={100}
      header={
        <ModalPageHeader
          before={
            (platform === Platform.VKCOM || platform === Platform.ANDROID) && <PanelHeaderClose onClick={handleClose} />
          }
          after={
            platform === Platform.IOS && (
              <PanelHeaderButton onClick={handleClose}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        />
      }
    >
      {children}
    </ModalPage>
  );
});
