import { PanelRoute, ViewRoute } from '@core/models';
import { CustomLayout } from '@ui/atoms';
import { memo } from 'react';
import { OfflinePanel } from './panels';

type Props = {
  id: ViewRoute.ConnectionError;
};

export const ConnectionErrorLayout = memo<Props>(({ id }) => {
  return (
    <CustomLayout id={id}>
      <OfflinePanel id={PanelRoute.Offline} />
    </CustomLayout>
  );
});
