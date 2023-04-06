import { useTimeout } from '@blumjs/hooks';
import { useUI } from '@core/hooks';
import { setSnackbar } from '@core/modules/ui';
import { typography } from '@ui/theme/typography.css';
import { Snackbar } from '@vkontakte/vkui';
import { memo, useCallback } from 'react';
import { snackbar as snackbarStyle } from './Snackbars.css';

const duration = 3500;

export const Snackbars = memo(() => {
  const { snackbar } = useUI();
  const handleClose = useCallback(() => {
    setSnackbar(null);
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
  success: <></>,
  error: <></>,
  info: <></>,
};
