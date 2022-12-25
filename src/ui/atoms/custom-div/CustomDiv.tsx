import { useTheme } from '@core/hooks';
import { memo } from 'react';

type Props = {
  onClick?: () => void;
  className?: string;
  style?: object;
  children: React.ReactNode;
};

export const CustomDiv = memo<Props>(({ onClick, className, style, children }) => {
  const theme = useTheme();
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: theme.customDivBg,
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
