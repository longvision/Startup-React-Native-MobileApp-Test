import React from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import * as GymsActions from '~/store/actions/gym';

//Inicio do componente
export default function GymList({ item, navigation }) {
  const dispatch = useDispatch();

  //Navegação para tela 'Activities' e disparo de ação para ativar a academia
  //selecionada, enviando a seleção para o reducer da store.
  handleToggleGym = item => {
    navigation.navigate('Activities');
    dispatch(GymsActions.toggleGym(item));
  };
  //Estrutura do componente
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={{
            uri: `${item.logo}`
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.address}>{item.address}</Text>
        <View style={styles.rating}>
          <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'Ok', 'Good', 'Great']}
            defaultRating={item.rating}
            size={20}
            isDisabled
            showRating
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Atividades"
            color="#48285b"
            onPress={() => handleToggleGym(item)}
          />
        </View>
      </View>
    </View>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  logo: {
    height: Dimensions.get('window').height * 0.2,
    marginTop: 10,
    marginBottom: 10,
    width: Dimensions.get('window').height * 0.2 * (1950 / 662)
  },
  image: {
    maxWidth: 60
  },
  container: {
    alignItems: 'center',
    flex: 1,
    display: 'flex'
  },
  rating: {
    paddingBottom: 15
  },
  card: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 15,
    width: 350,
    display: 'flex',
    borderRadius: 12.5
  },
  address: {
    paddingTop: 15,
    textAlign: 'center'
  },
  title: {
    fontWeight: '500',
    fontSize: 22,
    textAlign: 'center'
  },

  button: {
    alignSelf: 'center',
    marginTop: 25,
    borderColor: '#48285b',
    backgroundColor: '#fee166',
    minWidth: 140,
    borderWidth: 3,
    borderRadius: 15
  }
});
