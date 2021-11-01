import './Cryptocurrencies.scss';

import { TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import CryptoCoinCard from '../../components/CryptoCoinCard/CryptoCoinCard';
import Loader from '../../components/Loader/Loader';
import { useCoinsQuery } from '../../hooks/api';
import { Coin } from '../../types/Coin';

const Cryptocurrencies = () => {
  const { data: coinsData, isLoading: isCoinsLoading } = useCoinsQuery(100);

  const [coins, setCoins] = useState<Coin[]>();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCoins(coinsData);

    const filteredCoins = coinsData?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm),
    );

    setCoins(filteredCoins);
  }, [coinsData, searchTerm]);

  if (isCoinsLoading) return <Loader />;

  return (
    <div className="main-container">
      <div className="crypto__header">
        <h2 className="title title--pure">Cryptocurrencies</h2>
        <TextField
          className="crypto__search"
          variant="outlined"
          placeholder="Search"
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(evt.target.value.toLowerCase());
          }}
        />
      </div>
      {coins && (
        <div className="crypto-cards">
          {coins.map((coin) => (
            <CryptoCoinCard coin={coin} key={coin.id} isChart={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
