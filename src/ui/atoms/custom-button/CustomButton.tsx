import { typography } from '@ui/theme/typography.css';
import { Button } from '@vkontakte/vkui';
import { memo } from 'react';
import { btn } from './CustomButton.css';

type Props = {
  type?: 'primary' | 'transparent' | 'negative';
  children: React.ReactNode;
  dataTestId?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const CustomButton = memo<Props>(({ type, disabled, children, dataTestId, onClick }) => {
  const testId = dataTestId ?? 'custom-button';

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
      className={`${btn({ type })} ${typography({ variant: 'btn' })}`}
    >
      {children}
    </Button>
  );
});
