import React, { Component } from 'react';

import {
  Text,
  Button,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';

import api from '~/services/api';

import List from '~/pages/List';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20
  }
});
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20
  },
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
    textAlign: 'center'
  }
});

// import { Container } from './styles';

export default class Gyms extends Component {
  state = {
    gyms: []
  };
  componentDidMount = async () => {
    const response = await api.get(`/gyms/`);
    this.setState({
      gyms: response.data
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    const { gyms } = this.state;
    console.log(this.state.gyms);
    return (
      <ImageBackground
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png'
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <Text style={styles.welcome}>Selecione onde quer treinar hoje:</Text>

        <FlatList data={gyms} renderItem={({ item }) => <List item={item} />} />
      </ImageBackground>
    );
  }
}
