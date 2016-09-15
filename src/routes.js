import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';//eslint-disable-line import/no-named-as-default
import TruckDetail from './components/TruckDetail/TruckDetail';//eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="/TruckDetail/:id" component={TruckDetail} />
  </Route>
);
