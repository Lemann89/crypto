import { useQuery } from 'react-query';

import { get } from '../../services/api';

interface IStats {
  totalCoins: string;
  totalMarkets: string;
  totalExchanges: string;
  total24hVolume: string;
}

const getStats = async () => {
  const { data } = await get('/stats');

  return data.data;
};

export const useStatsQuery = () => {
  return useQuery<IStats>('stats', () => getStats());
};
