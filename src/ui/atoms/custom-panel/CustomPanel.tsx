import { useUI } from '@core/hooks';
import { PanelRoute } from '@core/models';
import { Panel } from '@vkontakte/vkui';
import { memo } from 'react';

type Props = {
  id: PanelRoute;
  className?: string;
  style?: object;
  children?: React.ReactNode;
};

export const CustomPanel = memo<Props>(({ id, className, style, children }) => {
  const { dimensions } = useUI();

  return (
    <Panel id={id}>
      <div
        className={className}
        style={{
          minHeight: dimensions.height,
          ...style,
        }}
      >
        {children}
      </div>
    </Panel>
  );
});
