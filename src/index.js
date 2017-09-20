// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history} from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import appSagas from './containers/App/sagas';

if (process.env.NODE_ENV === 'production') {
  require('loggly-jslogger');
}

appSagas.map(store.runSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
