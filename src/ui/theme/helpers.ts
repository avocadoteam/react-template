import { FontStyle } from '@core/models';
import { globalFontFace } from '@vanilla-extract/css';

const SFProRounded = 'SF Pro Rounded';
const Inter = 'Inter';
export const createSFProRounded = (fontStyle: FontStyle) => {
  globalFontFace(SFProRounded, {
    src: `url(/fonts/SF-Pro-Rounded-${fontStyle[0].toUpperCase()}${fontStyle.slice(1)}.woff2) format("woff2")`,
    ...createFontStyleAndWeight(fontStyle),
  });
};
export const createInter = (fontStyle: FontStyle) =>
  globalFontFace(Inter, {
    src: `url(/fonts/SF-Pro-Rounded-${fontStyle[0].toUpperCase()}${fontStyle.slice(1)}.woff2) format("woff2")`,
    ...createFontStyleAndWeight(fontStyle),
  });

export const styleToWeight = {
  thin: 100,
  ultralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
const createFontStyleAndWeight = (fontStyle: FontStyle) => {
  return { fontStyle, fontWeight: styleToWeight[fontStyle] };
};
