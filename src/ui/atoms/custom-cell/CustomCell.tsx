import { memo } from 'react';
import { CustomDiv } from '../custom-div';
import { cell, cellSpaceBetween } from './CustomCell.css';

type Props = {
  dataTestId?: string;
  style?: object;
  className?: string;
  before: React.ReactNode;
  after: React.ReactNode;
  children: React.ReactNode;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  space: number;
  onClick?: () => void;
};

export const CustomCell = memo<Props>(
  ({ dataTestId, style, className, pt, pb, pl, pr, space, before, after, children, onClick }) => {
    const testId = dataTestId ?? 'custom-cell';

    return (
      <CustomDiv
        dataTestId={testId}
        onClick={onClick}
        style={{
          paddingRight: pr,
          paddingLeft: pl,
          paddingTop: pt,
          paddingBottom: pb,
          ...style,
        }}
        className={`${cell} ${className}`}
      >
        <div data-testid={`${testId}-before`}>{before}</div>
        <div data-testid={`${testId}-space-between`} style={{ marginLeft: space }} className={cellSpaceBetween}>
          <div data-testid={`${testId}-content`}>{children}</div>
          <div data-testid={`${testId}-after`}>{after}</div>
        </div>
      </CustomDiv>
    );
  },
);
