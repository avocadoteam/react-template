import { Spinner } from '@vkontakte/vkui';
import { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { listItems } from './ListItems.css';

type Props = {
  style?: object;
  className?: string;
  height: number;
  isShowSpinner: boolean;
  onListEndReached: () => void;
  items: React.ReactNode;
};

export const ListItems = memo<Props>(({ style, className, height, isShowSpinner, onListEndReached, items }) => {
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) {
      onListEndReached();
    }
  }, [inView, onListEndReached]);

  return (
    <div className={`${listItems} ${className}`} style={{ height, ...style }}>
      {items}
      {isShowSpinner && <Spinner />}
      <div ref={ref} />
    </div>
  );
});
