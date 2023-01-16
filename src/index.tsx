import '@core/bug-tracker';
import { vkBridgeInit } from '@core/vk-bridge';
import { createRoot } from 'react-dom/client';
import { App } from './App';

vkBridgeInit();

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

import('./eruda').then(({ default: eruda }) => {}); //runtime download
