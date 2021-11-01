import './CryptoCoinCard.scss';

import { ChartData } from 'chart.js';
import classNames from 'classnames';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import { Coin } from '../../types/Coin';

interface IProps {
  coin: Coin;
  isChart?: boolean;
}

const CryptoCoinCard: React.FC<IProps> = ({ coin, isChart = true }) => {
  const color = coin.color ?? '#67869c';

  const getChartData = (canvas: any) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 140);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, '#FFFFFF');

    return {
      labels: new Array(coin.history.length).fill(false),
      datasets: [
        {
          label: '',
          data: coin.history,
          fill: 'start',
          backgroundColor: gradient,
          borderColor: color,
          pointRadius: 0,
          cubicInterpolationMode: 'monotone',
        },
      ],
    } as ChartData<any>;
  };

  const options = {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Link to={`/cryptocurrencies/${coin.id}`} className="crypto-card">
      <div className="crypto-card__info">
        <div className="crypto-card__icon">
          <img src={coin.iconUrl} alt={coin.slug} />
        </div>
        <span className="crypto-card__name">{coin.name}</span>
        <span className="crypto-card__symbol">{coin.symbol}</span>
      </div>
      {isChart && (
        <div className="crypto-card__chart">
          <Line data={getChartData} options={options} />
        </div>
      )}
      <div className="crypto-card__money">
        <span className="crypto-card__price">${Number(coin.price).toFixed(2)}</span>
        <span
          className={classNames([
            'crypto-card__change',
            Math.sign(coin.change) >= 0 ? '' : 'crypto-card__change--negative',
          ])}>
          {Math.sign(coin.change) >= 0 ? '+' : ''}
          {coin.change}%
        </span>
      </div>
    </Link>
  );
};

export default React.memo(CryptoCoinCard);
