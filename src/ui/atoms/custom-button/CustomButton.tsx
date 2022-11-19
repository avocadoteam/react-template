import { Button } from "@vkontakte/vkui";
import { ThemeContext } from "core/contexts";
import { memo, useContext } from "react";
import { TextSFProRoundedMedium } from "ui/atoms";

type Props = {
  type: "primary" | "transparent" | "negative";
  children: React.ReactNode;
  dataTestId?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const CustomButton = memo<Props>(
  ({ type, disabled, children, dataTestId, onClick }) => {
    const theme = useContext(ThemeContext);
    const testId = dataTestId ?? "customized-button";

    return (
      <Button
        disabled={disabled}
        onClick={onClick}
        data-testid={testId}
        style={{
          minWidth: "auto",
          width: 319,
          height: 50,
          background: theme.btn[type].background,
          borderRadius: 20,
        }}
      >
        <TextSFProRoundedMedium
          dataTestId={`${testId}-text`}
          letterSpacing={0.5}
          lineHeight={20}
          fontSize={17}
          color={theme.btn[type].color}
        >
          {children}
        </TextSFProRoundedMedium>
      </Button>
    );
  }
);
