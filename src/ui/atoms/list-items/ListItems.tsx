import { useIntersectionObserver } from '@blumjs/hooks';
import { Spinner } from '@vkontakte/vkui';
import { ComponentProps, forwardRef, LegacyRef, useEffect } from 'react';
import { listItems } from './ListItems.css';

type Props = {
  height: number;
  isShowSpinner: boolean;
  onListEndReached: () => void;
  items: React.ReactNode[];
} & ComponentProps<'div'>;

export const ListItems = forwardRef(
  (
    { style, className, height, isShowSpinner, onListEndReached, items, ...props }: Props,
    listRef: LegacyRef<HTMLDivElement>,
  ) => {
    const { entry, ref } = useIntersectionObserver({});
    useEffect(() => {
      if (entry?.isIntersecting) {
        onListEndReached();
      }
    }, [entry?.isIntersecting, onListEndReached]);

    return (
      <div {...props} ref={listRef} className={`${listItems} ${className}`} style={{ height, ...style }}>
        {items}
        {isShowSpinner && <Spinner />}
        {items.length !== 0 && <div ref={ref} />}
      </div>
    );
  },
);
