import axios, { Method } from 'axios';

const buildUrl = (endpoint: string = '') => {
  return import.meta.env.VITE_CIONRANKING_BASE_URL + endpoint;
};

export const request = <T extends any>(link: string, data: any, method: Method) => {
  const url = buildUrl(link);

  const headers = {
    'x-rapidapi-host': import.meta.env.VITE_CIONRANKING_HOST as string,
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY as string,
  };

  return axios({
    method,
    url,
    data,
    headers,
  }) as Promise<T>;
};

export const get = <T extends any>(url: string, data?: any) => {
  return request<T>(url, data, 'get');
};
