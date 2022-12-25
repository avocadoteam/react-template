import { ApiEmit, ApiEvent } from '@core/models';
import { getUrlParams } from '@core/utils';
import { connect } from 'socket.io-client';

class Socket {
  socket: any;

  onConnect = (callback: NotGenericCallback) => {
    this.socket.on('connect', callback);
  };

  onDisconnect = (callback: NotGenericCallback) => {
    this.socket.on('disconnect', callback);
  };

  onConnectionError = (callback: NotGenericCallback) => {
    this.socket.on('connect_error', callback);
  };

  call = <T, P>(method: ApiEmit, params: P, callback?: Callback<T>) => {
    try {
      this.socket.emit(method, params, callback);
    } catch (e) {
      console.log('failed method: ', method);
      console.log('error: ', e);
    }
  };

  subscribe = <T>(event: ApiEvent, callback: SubscribeCallback<T>) => {
    try {
      this.socket.on(event, callback);
    } catch (e) {
      console.log('failed event: ', event);
      console.log('error: ', e);
    }
  };

  unsubscribe = (...events: ApiEvent[]) => {
    for (const event of events) {
      this.socket.removeAllListeners(event);
    }
  };

  connect = async (url: string) => {
    if (this.socket) {
      this.socket.connect(url, {
        path: '/socket.io',
        query: getUrlParams(),
        transports: ['websocket', 'polling', 'flashsocket'],
        reconnection: false,
      });
    } else {
      //@ts-ignore
      this.socket = connect(url, {
        path: '/socket.io',
        query: getUrlParams(),
        transports: ['websocket', 'polling', 'flashsocket'],
        reconnection: false,
      });
    }
  };

  getSocket = () => {
    return this.socket;
  };
}

export const socket = new Socket();

type NotGenericCallback = () => void;
type Callback<T> = (res: { response: T }) => Promise<void> | void;
type SubscribeCallback<T> = (res: T) => void;
