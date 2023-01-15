import { Tab as TabType } from '@core/models';
import { forwardRef, LegacyRef } from 'react';
import { Tab } from './Tab';
import { tabs as tabsStyle } from './Tabs.css';

type Props = {
  onClick: (tab: TabType) => void;
  tabs: TabType[];
  activeTab: TabType;
};

export const Tabs = forwardRef(({ onClick, tabs, activeTab }: Props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={tabsStyle}>
      {tabs.map(t => (
        <Tab isActive={t.title === activeTab.title} onClick={() => onClick(t)} key={t.title}>
          {t.title}
        </Tab>
      ))}
    </div>
  );
});
