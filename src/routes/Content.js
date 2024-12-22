import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './Routes';
import { Loading } from '../components/Components';

const Content = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route, key) => {
            return route.component && (
              <Route
                key={key}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (

                  <route.component {...props} />

                )}
              />
            );
          })}
          <Route path='*' render={() => <Redirect to="/404" />} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default React.memo(Content);
