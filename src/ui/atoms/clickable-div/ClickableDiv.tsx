import { memo } from 'react';
import { clickableDiv } from './ClickableDiv.css';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: object;
  children: React.ReactNode;
};

export const ClickableDiv = memo<Props>(({ className, disabled, style, children, onClick }) => {
  return (
    <div
      onClick={disabled || !onClick ? () => {} : onClick}
      className={`${clickableDiv({ clickable: !disabled && !!onClick })} ${className}`}
      style={{ cursor: disabled ? 'default' : 'pointer', ...style }}
    >
      {children}
    </div>
  );
});
