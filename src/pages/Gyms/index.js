import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  StatusBar
} from 'react-native';

import GymList from '~/components/GymList';
import api from '~/services/api';

console.disableYellowBox = true;

//Inicio do componente
export default function Gyms({ navigation }) {
  //Estado local: gyms
  const [gyms, setGyms] = useState([]);
  //Chama a api para carregar as lista de gyms
  async function loadGyms() {
    const response = await api.get('/gyms/');
    setGyms(response.data);
  }
  //Hook semelhante ao 'componentDidMount', para carregar as gyms
  useEffect(() => {
    loadGyms();
  }, []);
  //Estrutura do componente
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <FlatList
        style={styles.lista}
        data={gyms}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <GymList item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
//Barra de navegação superior
Gyms.navigationOptions = {
  title: 'Academias',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};
//Estilização do componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 0
  },
  lista: { marginTop: 20 },
  button: {
    height: 44,
    width: 120,
    marginTop: 50
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center'
  },
  subtitle: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center'
  },
  logo: {
    height: Dimensions.get('window').height * 0.15,
    marginVertical: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').height * 0.15 * (1950 / 662)
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  }
});
