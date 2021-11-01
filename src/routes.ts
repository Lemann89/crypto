import React from 'react';

import Coin from './pages/Coin/Coin';
import Cryptocurrencies from './pages/Cryptocurrencies/Cryptocurrencies';
import Home from './pages/Home';

interface IRoutes {
  path: string;
  component: React.FunctionComponent;
  routes?: IRoutes[];
  exact?: boolean;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/cryptocurrencies',
    component: Cryptocurrencies,
    exact: true,
  },
  {
    path: '/cryptocurrencies/:id',
    component: Coin,
  },
];
