import { PanelRoute, ViewRoute } from '@core/models';
import { CustomLayout } from '@ui/atoms';
import { memo } from 'react';
import { HomePanel } from './panels';

type Props = {
  id: ViewRoute.Main;
};

export const MainLayout = memo<Props>(({ id }) => {
  return (
    <CustomLayout id={id}>
      <HomePanel id={PanelRoute.Home} />
    </CustomLayout>
  );
});
