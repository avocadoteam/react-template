import { Icon24Dismiss } from "@vkontakte/icons";
import {
  ANDROID,
  IOS,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  PanelHeaderClose,
  usePlatform,
  VKCOM,
} from "@vkontakte/vkui";
import { useTheme } from "core/hooks";
import { ModalRoute } from "core/models";
import { setActiveModal } from "core/modules/main";
import { memo, useCallback } from "react";

type Props = {
  id: ModalRoute;
  children: React.ReactNode;
};

export const CustomModalPage = memo<Props>(({ id, children }) => {
  const theme = useTheme();
  const platform = usePlatform();
  const handleClose = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <ModalPage
      id={id}
      settlingHeight={100}
      header={
        <ModalPageHeader
          left={
            (platform === VKCOM || platform === ANDROID) && (
              <PanelHeaderClose onClick={handleClose} />
            )
          }
          right={
            platform === IOS && (
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
