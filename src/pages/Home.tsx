import millify from 'millify';
import React from 'react';

import CryptoCoinCard from '../components/CryptoCoinCard/CryptoCoinCard';
import Loader from '../components/Loader/Loader';
import StatsCard, { StatsCardStyles } from '../components/StatsCard/StatsCard';
import { useCoinsQuery, useStatsQuery } from '../hooks/api';

const Home = () => {
  const { data: stats, isLoading: isStatsLoading } = useStatsQuery();
  const { data: coins, isLoading: isCoinsLoading } = useCoinsQuery(10);

  if (isStatsLoading && isCoinsLoading) return <Loader />;

  return (
    <div className="main-container">
      <h2 className="title">Global Cryptocurrency Stats</h2>
      {stats && (
        <div className="stats-cards">
          <StatsCard
            text={stats.totalCoins}
            title="Total Coins"
            icon="coins"
            style={StatsCardStyles.RED}
          />
          <StatsCard
            text={stats.totalMarkets}
            title="Total Markets"
            icon="mail-bulk"
            style={StatsCardStyles.YELLOW}
          />
          <StatsCard
            text={stats.totalExchanges}
            title="Total Exchanges"
            icon="exchange-alt"
            style={StatsCardStyles.BLUE}
          />
          <StatsCard
            text={millify(Number(stats.total24hVolume))}
            title="Total 24h Volume"
            icon="history"
            style={StatsCardStyles.VIOLET}
          />
        </div>
      )}
      <h2 className="title">Top 10 Cryptos In The World</h2>
      {coins && (
        <div className="crypto-cards">
          {coins.map((coin) => (
            <CryptoCoinCard coin={coin} key={coin.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
