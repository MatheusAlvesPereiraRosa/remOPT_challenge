import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getData} from '../api/apiEndpoint';

export const Pokemon = ({route, navigation}) => {
  const {id} = route.params;

  const [data, setData] = useState({
    id: 0,
    name: '',
    sprites: '',
    types: '',
  });

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const takeTypes = typesObj => {
    let types = typesObj.map(item => item.type.name);

    return types;
  };

  const typesString = types => {
    let arrTypes = takeTypes(types);

    let strTypes = arrTypes.join(', ');

    return strTypes;
  };

  const fetchData = async () => {
    try {
      const response = await getData(id);

      setData({
        ...data,
        id: response.data.id,
        name: response.data.name,
        types: typesString(response.data.types),
        sprites: response.data.sprites.front_default,
      });
    } catch (error) {
      console.error('Erro ao retornar os dados', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pokemon-go-wallpaper.jpg')}
        style={styles.imageBackground}>
        <View style={styles.pokeContainer}>
          <Text style={styles.label}>ID: {id}</Text>
          {data.sprites !== '' && (
            <Image
              source={{uri: `${data.sprites}`}}
              style={styles.imageForeground}
            />
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Name: {data.name}</Text>
            <Text style={styles.info}>Type: {data.types}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Voltar para o início</Text>
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
  pokeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    color: '#FFF000',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 75,
  },
  infoContainer: {
    display: 'flex',
  },
  info: {
    color: '#FFF000',
    fontSize: 20,
    textAlign: 'left',
  },
  imageForeground: {
    width: 250,
    height: 250,
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
