import './App.scss';

import { createBrowserHistory } from 'history';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout/Layout';
import RouteWithSubRoutes from './components/Routes/RouteWithSubRoutes';
import { initIcons } from './icons';
import { routes } from './routes';

const queryClient = new QueryClient();

initIcons();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Layout>
            {routes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
          </Layout>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
