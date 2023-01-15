import { typography } from '@ui/theme/typography.css';
import { Button } from '@vkontakte/vkui';
import { ComponentProps, memo } from 'react';
import { btn } from './CustomButton.css';

type Props = {
  type?: 'primary' | 'transparent' | 'negative';
  dataTestId?: string;
} & ComponentProps<typeof Button>;

export const CustomButton = memo<Props>(({ type, dataTestId, ...props }) => {
  return (
    <Button
      {...props}
      data-testid={dataTestId ?? 'custom-button'}
      className={`${btn({ type })} ${typography({ variant: 'btn' })}`}
    />
  );
});
