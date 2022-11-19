import { memo } from "react";

const createFont = (fontFamily: string) => {
  type Props = {
    className?: string;
    fontSize?: number;
    color?: string;
    letterSpacing?: number;
    lineHeight?: number;
    dataTestId?: string;
    children: React.ReactNode;
  };
  const Font = memo<Props>(
    ({
      className,
      fontSize,
      color,
      letterSpacing,
      lineHeight,
      dataTestId,
      children,
    }) => {
      return (
        <span
          data-testid={dataTestId ?? fontFamily}
          className={className}
          style={{ fontSize, color, lineHeight, letterSpacing, fontFamily }}
        >
          {children}
        </span>
      );
    }
  );
  return Font;
};

export const TextSFProRoundedMedium = createFont("SFProRoundedMedium");
export const TextSFProRoundedBold = createFont("SFProRoundedBold");
export const TextSFProRoundedHeavy = createFont("SFProRoundedHeavy");
export const TextSFProRoundedBlack = createFont("SFProRoundedBlack");
export const TextSFProRoundedSemibold = createFont("SFProRoundedSemibold");
export const TextSFProTextRegular = createFont("SFProTextRegular");
