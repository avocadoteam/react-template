import { dropOnboarding } from './api';

window.dropOnboarding = dropOnboarding;

import('src/eruda').then(({ default: eruda }) => {});
