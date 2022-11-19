import { memo } from "react";
import styles from "./ClickableDiv.module.scss";

type Props = {
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  style?: object;
  children: React.ReactNode;
};

export const ClickableDiv = memo<Props>(
  ({ className, disabled, style, children, onClick }) => {
    return (
      <div
        onClick={disabled ? () => {} : onClick}
        className={`${!disabled && styles.clickable_div} ${className}`}
        style={{ cursor: disabled ? "default" : "pointer", ...style }}
      >
        {children}
      </div>
    );
  }
);
