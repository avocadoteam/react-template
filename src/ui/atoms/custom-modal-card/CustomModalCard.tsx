import { back } from '@blumjs/router';
import { ModalRoute } from '@core/models';
import { ModalCard } from '@vkontakte/vkui';
import { ComponentProps, memo, useCallback } from 'react';
import { actionsStyle } from './CustomModalCard.css';

type Props = {
  id: ModalRoute;
} & ComponentProps<typeof ModalCard>;

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
