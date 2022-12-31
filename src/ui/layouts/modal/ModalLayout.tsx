import { useRouter } from '@core/hooks';
import { ModalRoute } from '@core/models';
import { back } from '@core/modules/router';
import { ModalRoot } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';
import { NotificationsCard } from './cards';
import { OnboardingModal } from './modals';

export const ModalLayout = memo(() => {
  const { activeModal } = useRouter();
  const handleClose = useCallback(() => {
    back();
  }, []);

  return (
    <ModalRoot onClose={handleClose} activeModal={activeModal}>
      <OnboardingModal id={ModalRoute.Onboarding} />
      <NotificationsCard id={ModalRoute.Notifications} />
    </ModalRoot>
  );
});
