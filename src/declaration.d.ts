declare module '*.scss';
declare module '*.webp';
interface Window {
  isBackFromBrowser: boolean;
  dropOnboarding: () => void;
}
window.isBackFromBrowser = window.isBackFromBrowser || true;
