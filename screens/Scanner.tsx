import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const Scanner = ({navigation}) => {
  const [pokeId, setPokeId] = useState('');
  const [id, setId] = useState('');

  console.log(pokeId);
  console.log(id);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={({data}) => {
          let id = data.split(': ');
          setPokeId(data);
          setId(id[1]);
        }}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <View>
            <Text style={styles.id}>{pokeId}</Text>
          </View>
        }
        bottomContent={
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Pokemon', {
                  id: id,
                })
              }>
              <Text style={styles.buttonText}>
                Ver informações sobre pokemon
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
  },
  id: {
    color: '#FFF',
  },
  buttonContainer: {
    paddingTop: 70,
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
