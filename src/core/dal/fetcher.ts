import { fetcherBaseUrl, vkQuery } from '@core/constants';
import { ApiRequest } from '@core/models';
import { setSnackbar } from '@core/modules/ui';
import axios from 'axios';

export const AX = axios.create({
  baseURL: fetcherBaseUrl,
});

type Config<ResponseData, ReturnData> = {
  method: 'get' | 'put' | 'post' | 'delete';
  fallbackData: ReturnData;
  body?: object;
  query?: object;
  successData?: ReturnData;
  transformation?: (response: { data: ResponseData }) => any;
};

export const createRequest = async <ResponseData, ReturnData>(
  url: ApiRequest,
  { method, fallbackData, body, query, successData, transformation }: Config<ResponseData, ReturnData>,
): Promise<ReturnData> => {
  try {
    const res = await AX[method]<ResponseData>(
      `${url}${vkQuery}&${Object.keys(query ?? {})
        .map(key => (query ? `${key}=${query[key as keyof typeof query]}` : ''))
        .join('&')}`,
      {
        timeout: 20000,
        ...body,
      },
    );
    if (Object.hasOwnProperty.bind(res.data)('message')) {
      //@ts-ignore
      throw new Error(res.data.message);
    }
    return successData ? successData : !!transformation ? transformation(res) : res;
  } catch (e: any) {
    setSnackbar({
      type: 'error',
      message: (e as object).hasOwnProperty('message')
        ? //@ts-ignore
          (e as object).message
        : 'Плохое интернет соединение',
    });
    console.log('api error', e);
    return fallbackData;
  }
};
