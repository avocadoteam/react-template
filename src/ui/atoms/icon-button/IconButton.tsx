import { ComponentProps, forwardRef, Ref } from 'react';
import { ClickableDiv } from '../clickable-div';
import { iconButton } from './IconButton.css';

type Props = {
  type?: 'primary' | 'transparent' | 'negative';
} & ComponentProps<typeof ClickableDiv>;

export const IconButton = forwardRef(({ type, dataTestId, className, ...props }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <ClickableDiv
      {...props}
      ref={ref}
      className={`${iconButton({ type })} ${className}`}
      dataTestId={dataTestId ?? 'icon-button'}
    />
  );
});
