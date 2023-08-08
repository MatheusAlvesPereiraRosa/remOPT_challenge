import React from 'react';
import {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const Scanner = ({navigation}) => {
  // dado bruto extraído pelo QR code, para ser mostrado na tela
  const [pokeId, setPokeId] = useState('');

  // ID extraído dos dados recolhidos pelo QR code
  const [id, setId] = useState('');

  // função para lidar com a leitura do QR code
  const handleRead = e => {
    let id = e.data.split(': ');
    setPokeId(e.data);
    setId(id[1]);
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={handleRead}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        customMarker={
          <View style={styles.customMarkerContainer}>
            <View style={styles.topLeft} />
            <View style={styles.topLeft2} />
            <View style={styles.topRight} />
            <View style={styles.topRight2} />
            <View style={styles.bottomLeft} />
            <View style={styles.bottomLeft2} />
            <View style={styles.bottomRight} />
            <View style={styles.bottomRight2} />
          </View>
        }
        topViewStyle={{position: 'absolute', bottom: '29%', zIndex: 2}}
        containerStyle={{flex: 1}}
        cameraContainerStyle={{flex: 1}}
        cameraStyle={{flex: 1, height: '100%'}}
        bottomViewStyle={{position: 'absolute', bottom: 45}}
        topContent={
          <View>
            {pokeId && <Text style={styles.id}>{pokeId}</Text>}
            {pokeId === '' && <Text>Aponte a câmera para o código QR</Text>}
          </View>
        }
        bottomContent={
          <View>
            {id && (
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
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  customMarkerContainer: {
    position: 'relative',
    width: 275,
    height: 275,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 5,
    backgroundColor: '#FFF',
  },
  topLeft2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 5,
    height: 50,
    backgroundColor: '#FFF',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 5,
    backgroundColor: '#FFF',
  },
  topRight2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 5,
    height: 50,
    backgroundColor: '#FFF',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 5,
    height: 50,
    backgroundColor: '#FFF',
  },
  bottomLeft2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 5,
    backgroundColor: '#FFF',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 5,
    backgroundColor: '#FFF',
  },
  bottomRight2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 5,
    height: 50,
    backgroundColor: '#FFF',
  },
  cameraContainer: {
    flex: 1,
  },
  id: {
    color: '#FFF',
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '300',
  },
  button: {
    marginTop: '31%',
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
