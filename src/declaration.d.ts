declare module '*.scss';
declare module '*.webp';
interface Window {
  isBackFromBrowser: boolean;
}
window.isBackFromBrowser = window.isBackFromBrowser || true;
