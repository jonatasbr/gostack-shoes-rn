import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import './config/ReactotronConfig';

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
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>welcome, rocketshoes.</Text>
    </View>
  );
}

export default App;
