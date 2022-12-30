import { Tab as TabType } from '@core/models';
import { memo } from 'react';
import { Tab } from './Tab';
import { tabs as tabsStyle } from './Tabs.css';

type Props = {
  onClick: (tab: TabType) => void;
  tabs: TabType[];
  activeTab: TabType;
};

export const Tabs = memo<Props>(({ onClick, tabs, activeTab }) => {
  return (
    <div className={tabsStyle}>
      {tabs.map(t => (
        <Tab isActive={t.title === activeTab.title} onClick={() => onClick(t)} key={t.title}>
          {t.title}
        </Tab>
      ))}
    </div>
  );
});
