import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Matheus Alves Pereira Rosa</Text>
      <Text style={styles.text}>Pokemon Go</Text>
      <Button title="Ler QR code" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#FF0000',
    textAlign: 'center',
  },
});
