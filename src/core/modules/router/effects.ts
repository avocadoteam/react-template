import { createEffect } from 'effector';

export const back = createEffect(() => {
  window.history.back();
});
