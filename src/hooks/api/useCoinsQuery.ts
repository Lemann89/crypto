import { useQuery } from 'react-query';

import { get } from '../../services/api';
import { Coin } from '../../types/Coin';

const getCoins = async (limit: number) => {
  const { data } = await get(`/coins?limit=${limit}`);

  return data.data.coins;
};

export const useCoinsQuery = (limit: number) => {
  return useQuery<Coin[]>('coins', () => getCoins(limit));
};
