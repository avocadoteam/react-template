import { memo } from 'react';
import { CustomDiv } from '../custom-div';
import { cell, cellSpaceBetween } from './CustomCell.css';

type Props = {
  style?: object;
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

export const CustomCell = memo<Props>(({ style, pt, pb, pl, pr, space, before, after, children, onClick }) => {
  return (
    <CustomDiv
      onClick={onClick}
      style={{
        paddingRight: pr,
        paddingLeft: pl,
        paddingTop: pt,
        paddingBottom: pb,
        ...style,
      }}
      className={cell}
    >
      <div style={{ marginRight: space / 2 }}>{before}</div>
      <div style={{ marginLeft: space / 2 }} className={cellSpaceBetween}>
        <div>{children}</div>
        <div>{after}</div>
      </div>
    </CustomDiv>
  );
});
