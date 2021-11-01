import { useQuery } from 'react-query';

import { get } from '../../services/api';
import { CoinHistory } from '../../types/CoinHistory';

const getCoinHistory = async (coinId: string, timeframe: string) => {
  const { data } = await get(`/coin/${coinId}/history/${timeframe}`);

  return data.data.history;
};

export const useCoinHistoryQuery = (coinId: string, timeframe: string) => {
  return useQuery<CoinHistory[]>(['history', coinId, timeframe], () =>
    getCoinHistory(coinId, timeframe),
  );
};
