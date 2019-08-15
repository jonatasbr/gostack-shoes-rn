import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  testText: {
    color: '#000',
    fontSize: 20,
  },
});

export default function Cart() {
  return (
    <View>
      <Text style={styles.testText}>Cart</Text>
    </View>
  );
}
