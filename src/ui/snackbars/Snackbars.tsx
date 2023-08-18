import { useTimeout } from '@blumjs/hooks';
import { useUI } from '@core/hooks';
import { uiEvents } from '@core/modules/ui';
import { vars } from '@ui/theme';
import { typography } from '@ui/theme/typography.css';
import { Icon28CheckCircleOutline, Icon28ErrorCircleOutline, Icon28MessageOutline } from '@vkontakte/icons';
import { Snackbar } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';
import { snackbar as snackbarStyle } from './Snackbars.css';

const duration = 3500;

export const Snackbars = memo(() => {
  const { snackbar } = useUI();
  const handleClose = useCallback(() => {
    uiEvents.setSnackbar(null);
  }, []);
  useTimeout(handleClose, duration, [snackbar]);

  if (!snackbar) {
    return <></>;
  }

  return (
    <>
      <Snackbar className={snackbarStyle} duration={duration} before={snackIcons[snackbar.type]} onClose={handleClose}>
        <span className={typography({ variant: 'snackbar' })}>{snackbar.message}</span>
      </Snackbar>
    </>
  );
});

const snackIcons = {
  success: <Icon28CheckCircleOutline fill={vars.all.snackbar.success} />,
  error: <Icon28ErrorCircleOutline fill={vars.all.snackbar.error} />,
  info: <Icon28MessageOutline fill={vars.all.snackbar.info} />,
};
