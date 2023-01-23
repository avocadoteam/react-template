import { ApiEmit, ApiEvent } from '@core/models';
import { getSearchParams } from '@core/utils';
import { connect } from 'socket.io-client';

export const socket = {
  socket: null as any,
  onConnect(callback: NotGenericCallback) {
    this.socket.on('connect', callback);
  },
  onDisconnect(callback: NotGenericCallback) {
    this.socket.on('disconnect', callback);
  },
  onConnectionError(callback: NotGenericCallback) {
    this.socket.on('connect_error', callback);
  },
  call<T, P>(method: ApiEmit, params: P, callback?: Callback<T>) {
    try {
      this.socket.emit(method, params, callback);
    } catch (e) {
      console.log('failed method: ', method);
      console.log('error: ', e);
    }
  },
  subscribe<T>(event: ApiEvent, callback: SubscribeCallback<T>) {
    try {
      this.socket.on(event, callback);
    } catch (e) {
      console.log('failed event: ', event);
      console.log('error: ', e);
    }
  },
  unsubscribe(...events: ApiEvent[]) {
    for (const event of events) {
      this.socket.removeAllListeners(event);
    }
  },
  connect(url: string) {
    if (this.socket) {
      this.socket.connect(url, {
        path: '/socket.io',
        query: getSearchParams(),
        transports: ['websocket', 'polling', 'flashsocket'],
        reconnection: false,
      });
    } else {
      this.socket = connect(url, {
        path: '/socket.io',
        query: getSearchParams(),
        transports: ['websocket', 'polling', 'flashsocket'],
        reconnection: false,
      });
    }
  },
  disconnect() {
    this.socket.disconnect();
  },
  getSocket() {
    return this.socket;
  },
};

type NotGenericCallback = () => void;
type Callback<T> = (res: { response: T }) => Promise<void> | void;
type SubscribeCallback<T> = (res: T) => void;
