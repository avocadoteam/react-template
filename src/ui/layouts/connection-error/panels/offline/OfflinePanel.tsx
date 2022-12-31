import { PanelRoute } from '@core/models';
import { $ui } from '@core/modules/ui';
import { CustomPanel } from '@ui/atoms';
import { typography } from '@ui/theme';
import { useStore } from 'effector-react';
import { memo } from 'react';
import { offline, offlineDescription } from './OfflinePanel.css';

type Props = {
  id: PanelRoute.Offline;
};

export const OfflinePanel = memo<Props>(({ id }) => {
  const { dimensions } = useStore($ui);

  return (
    <CustomPanel id={id}>
      <div className={offline} style={{ ...dimensions }}>
        <div className={typography({ offline: 'header' })}>Упс</div>
        <div className={`${offlineDescription} ${typography({ offline: 'description' })}`}>
          Отсутствует интернет-соединение
        </div>
      </div>
    </CustomPanel>
  );
});
