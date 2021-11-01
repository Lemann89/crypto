import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  path: string;
  component: React.ComponentType<any>;
  routes?: IProps[];
  exact?: boolean;
}

const RouteWithSubRoutes: React.FC<IProps> = ({
  path,
  routes,
  exact,
  component: Component,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
};

export default RouteWithSubRoutes;
