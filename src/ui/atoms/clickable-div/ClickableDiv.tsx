import { ComponentProps, forwardRef, LegacyRef } from 'react';
import { clickableDiv } from './ClickableDiv.css';

type Props = {
  dataTestId?: string;
  disabled?: boolean;
} & ComponentProps<'div'>;

export const ClickableDiv = forwardRef(
  ({ className, disabled, onClick, dataTestId, ...props }: Props, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div
        {...props}
        ref={ref}
        data-testid={dataTestId ?? 'clickable-div'}
        onClick={disabled || !onClick ? () => {} : onClick}
        className={`${clickableDiv({ clickable: !disabled && !!onClick })} ${className}`}
      />
    );
  },
);
