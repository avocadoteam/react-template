import { back } from '@blumjs/router';
import { ModalRoute } from '@core/models';
import { ModalCard } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';
import { actionsStyle } from './CustomModalCard.css';

type Props = {
  id: ModalRoute;
  onClose?: () => void;
  icon: React.ReactNode;
  header: React.ReactNode;
  subheader: React.ReactNode;
  actions: React.ReactNode;
};

export const CustomModalCard = memo<Props>(({ id, onClose, icon, header, subheader, actions }) => {
  const handleClose = useCallback(() => {
    back();
  }, []);

  return (
    <ModalCard
      id={id}
      onClose={onClose ?? handleClose}
      header={header}
      icon={icon}
      subheader={subheader}
      actions={<div className={actionsStyle}>{actions}</div>}
    />
  );
});
