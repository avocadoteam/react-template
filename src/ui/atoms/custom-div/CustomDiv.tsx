import { memo } from 'react';
import { ClickableDiv } from '../clickable-div';
import { customDiv } from './CustomDiv.css';

type Props = {
  dataTestId?: string;
  onClick?: () => void;
  className?: string;
  style?: object;
  children: React.ReactNode;
};

export const CustomDiv = memo<Props>(({ dataTestId, onClick, className, style, children }) => {
  return (
    <ClickableDiv
      dataTestId={dataTestId ?? 'custom-div'}
      onClick={onClick}
      className={`${customDiv} ${className}`}
      style={style}
    >
      {children}
    </ClickableDiv>
  );
});
