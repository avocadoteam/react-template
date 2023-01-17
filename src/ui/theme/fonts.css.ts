import { FontStyle } from '@core/models';
import { createInter, createSFProRounded, styleToWeight } from './helpers';

Object.keys(styleToWeight).map(style => {
  createSFProRounded(style as FontStyle);
  createInter(style as FontStyle);
});
