import { memo } from 'react';
import { ClickableDiv } from '../clickable-div';
import { iconButton } from './IconButton.css';

type Props = {
  dataTestId?: string;
  type?: 'primary' | 'transparent' | 'negative';
  children: React.ReactNode;
  onClick: () => void;
};

export const IconButton = memo<Props>(({ children, type, onClick, dataTestId }) => {
  return (
    <ClickableDiv onClick={onClick} className={iconButton({ type })} dataTestId={dataTestId ?? 'icon-button'}>
      {children}
    </ClickableDiv>
  );
});
