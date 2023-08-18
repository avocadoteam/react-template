import { back } from '@blumjs/router';
import { ModalRoute } from '@core/models';
import { mainEffects } from '@core/modules/main';
import { CustomButton, CustomModalCard } from '@ui/atoms';
import { typography } from '@ui/theme';
import { Icon56NotificationOutline } from '@vkontakte/icons';
import { memo, useCallback } from 'react';

type Props = {
  id: ModalRoute.Notifications;
};

export const NotificationsCard = memo<Props>(({ id }) => {
  const handleClick = useCallback(() => {
    mainEffects.subscribeNotification().then(() => {
      back();
    });
  }, []);

  return (
    <CustomModalCard
      icon={<Icon56NotificationOutline />}
      header={<span className={typography({ notifications: 'header' })}>Turn on notifications</span>}
      subheader={
        <span className={typography({ notifications: 'subheader' })}>Each app should show what and when notify user</span>
      }
      actions={<CustomButton onClick={handleClick}>Turn on</CustomButton>}
      id={id}
    />
  );
});
