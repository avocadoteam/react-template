import { PanelRoute } from '@core/models';
import { $ui } from '@core/modules/ui';
import { Panel } from '@vkontakte/vkui';
import { useStore } from 'effector-react';
import { memo } from 'react';

type Props = {
  id: PanelRoute;
  className?: string;
  style?: object;
  children?: React.ReactNode;
};

export const CustomPanel = memo<Props>(({ id, className, style, children }) => {
  const { dimensions } = useStore($ui);

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
