import { Spinner } from '@vkontakte/vkui';
import { ComponentProps, forwardRef, LegacyRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { listItems } from './ListItems.css';

type Props = {
  height: number;
  isShowSpinner: boolean;
  onListEndReached: () => void;
  items: React.ReactNode;
} & ComponentProps<'div'>;

export const ListItems = forwardRef(
  (
    { style, className, height, isShowSpinner, onListEndReached, items, ...props }: Props,
    listRef: LegacyRef<HTMLDivElement>,
  ) => {
    const { inView, ref } = useInView();
    useEffect(() => {
      if (inView) {
        onListEndReached();
      }
    }, [inView, onListEndReached]);

    return (
      <div {...props} ref={listRef} className={`${listItems} ${className}`} style={{ height, ...style }}>
        {items}
        {isShowSpinner && <Spinner />}
        <div ref={ref} />
      </div>
    );
  },
);
