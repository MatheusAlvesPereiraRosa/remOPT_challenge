import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export const Pokemon = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pokemon-go-wallpaper.jpg')}
        style={styles.imageBackground}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Id do pokemon: {id}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Scanner')}>
              <Text style={styles.buttonText}>Scannear QR Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    color: '#FF0000',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 75,
  },
  buttonContainer: {
    paddingBottom: 90,
  },
  button: {
    padding: 15,
    borderRadius: 75,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
