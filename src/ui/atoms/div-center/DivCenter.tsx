import { memo } from 'react';
import { ClickableDiv } from '../clickable-div';
import { divCenter } from './DivCenter.css';

type Props = {
  onClick?: () => void;
  style?: object;
  className?: string;
  dataTestId?: string;
  children: React.ReactNode;
};

export const DivCenter = memo<Props>(({ children, dataTestId, className, style, onClick }) => {
  const testId = dataTestId ?? 'div-center';

  return (
    <ClickableDiv onClick={onClick} className={`${divCenter} ${className}`} style={style} data-testid={testId}>
      {children}
    </ClickableDiv>
  );
});
