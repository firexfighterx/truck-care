/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import {loadTrucks} from './actions/TruckListActions';
import {loadTruckCareGroup} from './actions/TruckCareGroupActions';
import './css/site.css';
import './css/yeti.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadTrucks());
store.dispatch(loadTruckCareGroup());
const history = syncHistoryWithStore(browserHistory, store);
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
