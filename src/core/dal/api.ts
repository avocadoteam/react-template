import { ApiRequest } from '@core/models';
import { createRequest } from './fetcher';

export const api = {
  getTests: (page: number) =>
    createRequest<{ data: string[] }, string[]>(ApiRequest.Test, {
      method: 'get',
      query: { page },
      transformation: res => res.data,
      fallbackData: [],
    }),

  postTest: (test: string) =>
    createRequest<boolean, boolean>(ApiRequest.Test, {
      method: 'post',
      body: { test },
      successData: true,
      fallbackData: false,
    }),
};
