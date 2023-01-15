import { ComponentProps, forwardRef, Ref } from 'react';
import { ClickableDiv } from '../clickable-div';
import { customDiv } from './CustomDiv.css';

type Props = ComponentProps<typeof ClickableDiv>;

export const CustomDiv = forwardRef(({ dataTestId, className, ...props }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <ClickableDiv {...props} ref={ref} dataTestId={dataTestId ?? 'custom-div'} className={`${customDiv} ${className}`} />
  );
});
