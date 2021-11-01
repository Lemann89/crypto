import './Coin.scss';

import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { ChartData } from 'chart.js';
import classNames from 'classnames';
import millify from 'millify';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import StatsRow from '../../components/StatsRow/StatsRow';
import { useCoinHistoryQuery, useCoinQuery } from '../../hooks/api';
import { coinChartOptions } from './chartSettings';

const Coin = () => {
  const { id } = useParams<{ id: string }>();
  const [timeframe, setTimeframe] = useState('7d');

  const { data: coin } = useCoinQuery(id);
  const { data: coinHistory } = useCoinHistoryQuery(id, timeframe);

  const timeframes = ['24h', '7d', '30d', '1y'];

  const color = coin?.color ?? '#67869c';

  const getChartData = (canvas: any) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 620);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, '#FFFFFF');

    return {
      labels: coinHistory?.map((history) =>
        new Date(history.timestamp).toLocaleDateString(),
      ),
      datasets: [
        {
          label: 'Price in USD',
          data: coinHistory?.map((history) => history.price),
          fill: 'start',
          backgroundColor: gradient,
          borderColor: color,
          pointRadius: 0,
          cubicInterpolationMode: 'monotone',
        },
      ],
    } as ChartData<any>;
  };

  const handleTimeframeChange = (event: SelectChangeEvent<string>) => {
    setTimeframe(event.target.value);
  };

  return coin && coinHistory ? (
    <div className="main-container">
      <div className="coin__head">
        <div className="coin__name">
          <div className="coin__icon">
            <img src={coin.iconUrl} alt={coin.slug} />
          </div>
          <h2 className="title title--pure">{coin.name}</h2>
          <span className="coin__symbol">{coin.symbol}</span>
          <span className="coin__price">${Number(coin.price).toFixed(2)}</span>
          <span
            className={classNames([
              'coin__change',
              Math.sign(Number(coin.change)) >= 0 ? '' : 'coin__change--negative',
            ])}>
            {Math.sign(Number(coin.change)) >= 0 ? '+' : ''}
            {coin.change}%
          </span>
        </div>
        <FormControl className="coin__select">
          <InputLabel id="demo-simple-select-label">Timeframe</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeframe}
            label="Timeframe"
            onChange={handleTimeframeChange}>
            {timeframes.map((time, idx) => (
              <MenuItem key={idx} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="coin__chart">
        <Line data={getChartData} options={coinChartOptions} />
      </div>
      <div className="coin__info">
        <div className="coin__columns">
          <div className="coin__column">
            <h3 className="title">What is {coin.name} ?</h3>
            <div
              className="coin__description"
              dangerouslySetInnerHTML={{ __html: coin.description as string }}
            />
          </div>
          <div className="coin__column">
            <h3 className="title">{coin.name} Statistics</h3>
            <StatsRow title="Symbol" value={coin.symbol as string} />
            <StatsRow title="Price" value={'$ ' + millify(Number(coin?.price))} />
            <StatsRow
              title="Total Supply"
              value={'$ ' + millify(Number(coin.totalSupply))}
            />
            <StatsRow title="Market Cap" value={'$ ' + millify(Number(coin.marketCap))} />
            <StatsRow title="Volume" value={'$ ' + millify(Number(coin.volume))} />
            <StatsRow
              title="Number Of Exchanges"
              value={coin.numberOfExchanges as number}
            />
            <StatsRow title="Number Of Markets" value={coin.numberOfMarkets as number} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Coin;
