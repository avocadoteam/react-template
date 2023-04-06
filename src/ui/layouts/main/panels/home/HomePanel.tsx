import { setActiveModal } from '@blumjs/router';
import { ModalRoute, PanelRoute } from '@core/models';
import { $main, unsubscribeNotification } from '@core/modules/main';
import { setSnackbar } from '@core/modules/ui';
import { shareLink } from '@core/vk-bridge';
import { CustomPanel } from '@ui/atoms';
import { DivWithHeader } from '@ui/bricks';
import {
  Icon24ArticleBoxOutline,
  Icon24InfoCircleOutline,
  Icon24MessageOutline,
  Icon24NotificationCheckOutline,
  Icon24NotificationOutline,
} from '@vkontakte/icons';
import { useStore } from 'effector-react';
import { memo, useCallback } from 'react';
import { home } from './HomePanel.css';

type Props = {
  id: PanelRoute.Home;
};

export const HomePanel = memo<Props>(({ id }) => {
  const { isUserSubscribedNotification } = useStore($main);
  const showSnackbar = useCallback(() => {
    setSnackbar({ type: 'info', message: 'Snackbar showed' });
  }, []);
  const share = useCallback(() => {
    shareLink('https://yandex.ru/search/?clid=2285101&text=google&lr=2');
  }, []);
  const openOnboarding = useCallback(() => {
    setActiveModal(ModalRoute.Onboarding);
  }, []);
  const handleNotification = useCallback(() => {
    if (isUserSubscribedNotification) {
      unsubscribeNotification();
      return;
    }
    setActiveModal(ModalRoute.Notifications);
  }, [isUserSubscribedNotification]);

  return (
    <CustomPanel id={id}>
      <div className={home}>
        <DivWithHeader
          header="Snackbar"
          icon={<Icon24MessageOutline />}
          text={'Click to show snack'}
          onClick={showSnackbar}
        />
        <DivWithHeader header="Link" icon={<Icon24InfoCircleOutline />} text={'Click to share link'} onClick={share} />
        <DivWithHeader
          header="Modal"
          icon={<Icon24ArticleBoxOutline />}
          text="Click to see onboarding"
          onClick={openOnboarding}
        />
        <DivWithHeader
          header="Notifications"
          icon={isUserSubscribedNotification ? <Icon24NotificationCheckOutline /> : <Icon24NotificationOutline />}
          text="Click to change notifications status"
          onClick={handleNotification}
        />
      </div>
    </CustomPanel>
  );
});
