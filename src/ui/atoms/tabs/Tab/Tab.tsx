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
  onClick: () => void;
  children: React.ReactNode;
};

const TabDefault = memo<PropsDefault>(({ children, onClick }) => {
  return (
    <DivCenter onClick={onClick} className={`${tab({ type: 'default' })} ${typography({ variant: 'tab' })}`}>
      {children}
    </DivCenter>
  );
});

type PropsActive = {
  children: React.ReactNode;
};

const TabActive = memo<PropsActive>(({ children }) => {
  return <DivCenter className={`${tab({ type: 'active' })} ${typography({ variant: 'tab' })}`}>{children}</DivCenter>;
});
