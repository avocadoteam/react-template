import { memo } from 'react';
import { ClickableDiv } from '../clickable-div';
import { iconButton } from './IconButton.css';

type Props = {
  type?: 'primary' | 'transparent' | 'negative';
  children: React.ReactNode;
  onClick: () => void;
};

export const IconButton = memo<Props>(({ children, type, onClick }) => {
  return (
    <ClickableDiv onClick={onClick} className={iconButton({ type })}>
      {children}
    </ClickableDiv>
  );
});
