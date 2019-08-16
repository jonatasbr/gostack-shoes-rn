import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  console.tron.log('testadon o reactotron');
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}

export default App;
