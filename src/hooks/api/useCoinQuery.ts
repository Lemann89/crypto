import { useQuery } from 'react-query';

import { get } from '../../services/api';
import { Coin } from '../../types/Coin';

const getCoin = async (coinId: string) => {
  const { data } = await get(`/coin/${coinId}`);

  return data.data.coin;
};

export const useCoinQuery = (coinId: string) => {
  return useQuery<Coin>(['coin', coinId], () => getCoin(coinId));
};
