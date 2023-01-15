import { ComponentProps, forwardRef, Ref } from 'react';
import { ClickableDiv } from '../clickable-div';
import { divCenter } from './DivCenter.css';

type Props = ComponentProps<typeof ClickableDiv>;

export const DivCenter = forwardRef(({ dataTestId, className, ...props }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <ClickableDiv {...props} ref={ref} className={`${divCenter} ${className}`} dataTestId={dataTestId ?? 'div-center'} />
  );
});
