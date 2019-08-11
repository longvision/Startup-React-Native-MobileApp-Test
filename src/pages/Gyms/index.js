import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  StatusBar
} from 'react-native';

import GymList from '~/components/GymList';
import api from '~/services/api';

export default class Gyms extends Component {
  static navigationOptions = {
    title: 'Academias',
    headerStyle: {
      backgroundColor: '#48285b',
      marginTop: 0
    },
    headerTintColor: '#fff'
  };
  state = {
    gyms: []
  };

  async componentDidMount() {
    const { gyms } = this.state;
    const response = await api.get('/gyms/');
    this.setState({ gyms: response.data });
    console.log(gyms);
  }

  render() {
    const { gyms } = this.state;
    console.log(this.state.gyms);
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <FlatList
          style={styles.lista}
          data={gyms}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <GymList item={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20
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
