import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import store from './store/index';

import Routes from './routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
