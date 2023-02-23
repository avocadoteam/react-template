import { dropOnboarding } from './api';

window.dropOnboarding = dropOnboarding;

//@ts-ignore
import('src/eruda').then(({ default: eruda }) => {});
