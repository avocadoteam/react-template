import { memo } from 'react';
import { clickableDiv } from './ClickableDiv.css';

type Props = {
  dataTestId?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: object;
  children?: React.ReactNode;
};

export const ClickableDiv = memo<Props>(({ className, disabled, style, children, onClick, dataTestId }) => {
  return (
    <div
      data-testid={dataTestId ?? 'clickable-div'}
      onClick={disabled || !onClick ? () => {} : onClick}
      className={`${clickableDiv({ clickable: !disabled && !!onClick })} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});
