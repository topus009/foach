import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import withAuth from '../hoc/withAuth';

const Auth = lazy(() => import('../pages/Auth'));
const Workers = lazy(() => import('../pages/Workers'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/workers" component={withAuth(Workers)} />
  </Switch>
);

export default Routes;
