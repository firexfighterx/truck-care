import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import TruckDetail from './components/TruckDetail/TruckDetail';
import About from './components/about/About';

export default (
  <Route path="/" component={App}>
    <Route path="/TruckDetail/:id" component={TruckDetail} />
  </Route>
);
