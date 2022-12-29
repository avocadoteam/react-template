import { TextSFProRoundedMedium } from '@ui/atoms';
import { Button } from '@vkontakte/vkui';
import { memo } from 'react';
import { btn } from './CustomButton.css';

type Props = {
  type: 'primary' | 'transparent' | 'negative';
  children: React.ReactNode;
  dataTestId?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const CustomButton = memo<Props>(({ type, disabled, children, dataTestId, onClick }) => {
  const testId = dataTestId ?? 'customized-button';

  return (
    <Button disabled={disabled} onClick={onClick} data-testid={testId} className={btn({ type })}>
      <TextSFProRoundedMedium dataTestId={`${testId}-text`} letterSpacing={0.5} lineHeight={20} fontSize={17}>
        {children}
      </TextSFProRoundedMedium>
    </Button>
  );
});
