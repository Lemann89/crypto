import { ChartOptions } from 'chart.js';

export const coinChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  hover: {
    mode: 'nearest',
    intersect: false,
  },
} as ChartOptions<any>;
