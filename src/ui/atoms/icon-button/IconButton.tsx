import { ThemeContext } from "core/contexts";
import { memo, useContext } from "react";
import styles from "./IconButton.module.scss";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const IconButton = memo<Props>(({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={styles.icon_button}
      style={{
        width: 50,
        height: 50,
        background: theme.btn.primary.background,
        color: theme.btn.primary.color,
        borderRadius: 20,
        border: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
});
