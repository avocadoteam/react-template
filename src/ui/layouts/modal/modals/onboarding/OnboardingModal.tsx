import { ModalRoute } from '@core/models';
import { checkOnboardingEffect } from '@core/modules/main';
import { back } from '@core/modules/router';
import { CustomButton, CustomModalPage } from '@ui/atoms';
import { typography } from '@ui/theme/typography.css';
import { memo, useCallback } from 'react';
import { onboardingModal, onboardingModalList } from './OnboardingModal.css';

type Props = {
  id: ModalRoute.Onboarding;
};

export const OnboardingModal = memo<Props>(({ id }) => {
  const handleClose = useCallback(() => {
    checkOnboardingEffect();
    back();
  }, []);

  return (
    <CustomModalPage onClose={handleClose} id={id}>
      <div className={onboardingModal}>
        <div className={typography({ onboarding: 'header' })}>App on Blue Meteor mean:</div>
        <div className={`${onboardingModalList} ${typography({ onboarding: 'listItem' })}`}>
          <div>- Make it easy</div>
          <div>- Make it fast</div>
          <div>- Make it better</div>
        </div>
        <div>
          <CustomButton onClick={handleClose}>Check</CustomButton>
        </div>
      </div>
    </CustomModalPage>
  );
});
