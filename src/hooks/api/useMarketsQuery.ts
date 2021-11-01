import { useQuery } from 'react-query';

import { get } from '../../services/api';

const getMarkets = async () => {
  const { data } = await get('/markets');

  return data;
};

export const useMarketsQuery = () => {
  return useQuery('markets', () => getMarkets());
};
