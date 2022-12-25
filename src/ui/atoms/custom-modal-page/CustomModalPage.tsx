import { useTheme } from '@core/hooks';
import { ModalRoute } from '@core/models';
import { Icon24Dismiss } from '@vkontakte/icons';
import { ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, usePlatform } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';

type Props = {
  id: ModalRoute;
  children: React.ReactNode;
};

export const CustomModalPage = memo<Props>(({ id, children }) => {
  const theme = useTheme();
  const platform = usePlatform();
  const handleClose = useCallback(() => {
    window.history.back();
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
      <div style={{ background: theme.appBg }}>{children}</div>
    </ModalPage>
  );
});
