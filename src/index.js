import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { loadArtists } from './actions/artists_actions';
import configureStore from './store/configure_store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore();
store.dispatch(loadArtists());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);