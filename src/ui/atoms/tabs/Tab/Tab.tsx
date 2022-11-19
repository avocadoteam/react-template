import { useTheme } from "core/hooks";
import { memo } from "react";
import { DivCenter } from "ui/atoms/div-center";
import { TextSFProRoundedMedium } from "ui/atoms/fonts";
import styles from "./Tab.module.scss";

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
  const theme = useTheme().tab.default;
  return (
    <DivCenter
      onClick={onClick}
      style={{ background: theme.background }}
      className={`${styles.tab} ${styles.tab__hover} ${styles.tab__active}`}
    >
      <TextSFProRoundedMedium
        color={theme.text}
        fontSize={17}
        letterSpacing={0.5}
      >
        {children}
      </TextSFProRoundedMedium>
    </DivCenter>
  );
});

type PropsActive = {
  children: React.ReactNode;
};

const TabActive = memo<PropsActive>(({ children }) => {
  const theme = useTheme().tab.active;
  return (
    <DivCenter style={{ background: theme.background }} className={styles.tab}>
      <TextSFProRoundedMedium
        color={theme.text}
        fontSize={17}
        letterSpacing={0.5}
      >
        {children}
      </TextSFProRoundedMedium>
    </DivCenter>
  );
});
