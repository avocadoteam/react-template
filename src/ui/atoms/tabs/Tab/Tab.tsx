import { DivCenter } from '@ui/atoms';
import { typography } from '@ui/theme/typography.css';
import { memo } from 'react';
import { tab } from './Tab.css';

type Props = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const Tab = memo<Props>(({ onClick, children, isActive }) => {
  if (isActive) {
    return <TabActive>{children}</TabActive>;
  }
  return <TabDefault onClick={onClick}>{children}</TabDefault>;
});

type PropsDefault = {
  dataTestId?: string;
  onClick: () => void;
  children: React.ReactNode;
};

export const TabDefault = memo<PropsDefault>(({ dataTestId, children, onClick }) => {
  return (
    <DivCenter
      dataTestId={dataTestId ?? 'tab-default'}
      onClick={onClick}
      className={`${tab({ type: 'default' })} ${typography({ variant: 'tab' })}`}
    >
      {children}
    </DivCenter>
  );
});

type PropsActive = {
  dataTestId?: string;
  children: React.ReactNode;
};

export const TabActive = memo<PropsActive>(({ dataTestId, children }) => {
  return (
    <DivCenter
      dataTestId={dataTestId ?? 'tab-active'}
      className={`${tab({ type: 'active' })} ${typography({ variant: 'tab' })}`}
    >
      {children}
    </DivCenter>
  );
});
