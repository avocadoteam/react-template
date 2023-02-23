import { back } from '@blumjs/router';
import { ModalRoute } from '@core/models';
import { Icon24Dismiss } from '@vkontakte/icons';
import { ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, usePlatform } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';

type Props = {
  id: ModalRoute;
  onClose?: () => void;
  children: React.ReactNode;
};

export const CustomModalPage = memo<Props>(({ id, children, onClose }) => {
  const platform = usePlatform();
  const handleClose = useCallback(() => {
    if (!!onClose) {
      onClose();
      return;
    }
    back();
  }, [onClose]);

  return (
    <ModalPage
      id={id}
      hideCloseButton
      onClose={handleClose}
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
