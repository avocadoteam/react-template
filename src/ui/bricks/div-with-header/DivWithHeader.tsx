import { CustomCell } from '@ui/atoms';
import { typography } from '@ui/theme';
import { memo } from 'react';

type Props = {
  header: React.ReactNode;
  icon: React.ReactNode;
  text: React.ReactNode;
  onClick: () => void;
};

export const DivWithHeader = memo<Props>(({ header, icon, text, onClick }) => {
  return (
    <div>
      <div className={typography({ home: 'header', m: 'l.5' })}>{header}</div>
      <CustomCell
        className={typography({ home: 'text', m: 't.5' })}
        onClick={onClick}
        before={icon}
        after={<></>}
        pt={15}
        pb={15}
        pl={15}
        pr={15}
        space={10}
      >
        {text}
      </CustomCell>
    </div>
  );
});
