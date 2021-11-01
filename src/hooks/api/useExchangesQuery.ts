import { useQuery } from 'react-query';

import { get } from '../../services/api';

const getExchanges = async () => {
  const { data } = await get('/exchanges');

  return data;
};

export const useExchangesQuery = () => {
  return useQuery('exchanges', () => getExchanges());
};
