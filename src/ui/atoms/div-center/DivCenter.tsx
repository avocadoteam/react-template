import { memo } from "react";

type Props = {
  style?: object;
  onClick?: () => void;
  className?: string;
  dataTestId?: string;
  children: React.ReactNode;
};

export const DivCenter = memo<Props>(
  ({ children, dataTestId, className, style, onClick }) => {
    const testId = dataTestId ?? "div-center";
    return (
      <div
        onClick={onClick}
        className={className}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          ...style,
        }}
        data-testid={testId}
      >
        {children}
      </div>
    );
  }
);
