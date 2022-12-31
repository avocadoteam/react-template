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
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestId ?? 'custom-button'}
      className={`${btn({ type })} ${typography({ variant: 'btn' })}`}
    >
      {children}
    </Button>
  );
});
