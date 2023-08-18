import { Store } from 'effector';

export const createGetStateProp =
  <T>(store: Store<T>) =>
  (key: keyof T) => {
    return store.getState()[key];
  };

export const createGetState =
  <T>(store: Store<T>) =>
  () => {
    return store.getState();
  };
