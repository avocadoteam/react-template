import { useIntersectionObserver } from '@blumjs/hooks';
import { Spinner } from '@vkontakte/vkui';
import { ComponentProps, forwardRef, LegacyRef, useEffect } from 'react';
import { listItems } from './ListItems.css';

type Props = {
  height: number | 'auto' | string;
  isShowSpinner: boolean;
  onEndListReach: () => void;
  items: React.ReactNode[];
} & ComponentProps<'div'>;

export const ListItems = forwardRef(
  (
    { style, className, height, isShowSpinner, onEndListReach, items, ...props }: Props,
    listRef: LegacyRef<HTMLDivElement>,
  ) => {
    const { entry, ref } = useIntersectionObserver({});
    useEffect(() => {
      if (entry?.isIntersecting) {
        onEndListReach();
      }
    }, [entry?.isIntersecting, onEndListReach]);

    return (
      <div {...props} ref={listRef} className={`${listItems} ${className}`} style={{ height, ...style }}>
        {items}
        {isShowSpinner && <Spinner />}
        {items.length !== 0 && <div ref={ref} />}
      </div>
    );
  },
);
