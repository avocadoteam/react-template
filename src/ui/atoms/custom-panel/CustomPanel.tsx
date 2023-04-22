import { useUI } from '@core/hooks';
import { PanelRoute } from '@core/models';
import { Panel } from '@vkontakte/vkui';
import { ComponentProps, memo } from 'react';

type Props = {
  id: PanelRoute;
} & ComponentProps<typeof Panel>;

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
