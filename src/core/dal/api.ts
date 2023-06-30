import { ApiRequest } from '@core/models';
import { createRequest } from './fetcher';

export const getTests = (page: number) =>
  createRequest<{ data: string[] }, string[]>(ApiRequest.Test, {
    method: 'get',
    query: { page },
    transformation: res => res.data,
    fallbackData: [],
  });

export const postTest = (test: string) =>
  createRequest<boolean, boolean>(ApiRequest.Test, {
    method: 'post',
    body: { test },
    successData: true,
    fallbackData: false,
  });
