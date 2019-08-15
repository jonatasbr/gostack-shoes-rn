import React from 'react';
import { StyleSheet } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

function App() {
  console.tron.log('testadon o reactotron');
  return <Routes />;
}

export default App;
