import { ComponentProps, forwardRef, Ref } from 'react';
import { CustomDiv } from '../custom-div';
import { cell, cellSpaceBetween } from './CustomCell.css';

type Props = {
  before: React.ReactNode;
  after: React.ReactNode;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  space: number;
} & ComponentProps<typeof CustomDiv>;

export const CustomCell = forwardRef(
  (
    { dataTestId, style, className, pt, pb, pl, pr, space, before, after, children, ...props }: Props,
    ref: Ref<HTMLDivElement>,
  ) => {
    const testId = dataTestId ?? 'custom-cell';

    return (
      <CustomDiv
        {...props}
        ref={ref}
        dataTestId={testId}
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
