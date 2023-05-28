import { ComponentProps, forwardRef, LegacyRef } from 'react';
import { isMobile } from 'react-device-detect';
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
        className={`${
          !disabled && !!onClick ? clickableDiv({ isMobile: typeof isMobile == 'boolean' ? isMobile : false }) : ''
        } ${className}`}
      />
    );
  },
);
