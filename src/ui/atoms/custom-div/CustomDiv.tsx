import { memo } from 'react';
import { ClickableDiv } from '../clickable-div';
import { customDiv } from './CustomDiv.css';

type Props = {
  onClick?: () => void;
  className?: string;
  style?: object;
  children: React.ReactNode;
};

export const CustomDiv = memo<Props>(({ onClick, className, style, children }) => {
  return (
    <ClickableDiv onClick={onClick} className={`${customDiv} ${className}`} style={style}>
      {children}
    </ClickableDiv>
  );
});
