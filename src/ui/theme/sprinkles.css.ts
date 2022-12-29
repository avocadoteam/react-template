import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const conditionalProperties = defineProperties({
  conditions: {
    yes: {},
    no: {},
  },
  defaultCondition: 'no',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    visibility: ['visible', 'hidden'],
  },
});

export const sprinkles = createSprinkles(conditionalProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
