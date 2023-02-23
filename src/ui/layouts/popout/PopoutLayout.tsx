import { useRouter } from '@blumjs/router';
import { PopoutRoute } from '@core/models';
import { $ui } from '@core/modules/ui';
import { useStore } from 'effector-react';
import { memo, useEffect, useState } from 'react';
import { popoutLayout } from './PopoutLayout.css';
import { LoadingPopout } from './popouts';

export const PopoutLayout = memo(() => {
  const { dimensions } = useStore($ui);
  const { activePopout } = useRouter();
  const [popout, setPopout] = useState<null | React.ReactNode>(null);
  useEffect(() => {
    if (activePopout) {
      setPopout(popouts[activePopout as keyof typeof PopoutRoute]);
    } else {
      setPopout(null);
    }
  }, [activePopout]);
  if (!popout) {
    return null;
  }

  return (
    <div
      className={popoutLayout}
      style={{
        ...dimensions,
      }}
    >
      {popout}
    </div>
  );
});

const popouts = {
  [PopoutRoute.Loading]: <LoadingPopout />,
};
