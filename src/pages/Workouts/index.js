import React, { Component } from 'react';

import { View } from 'react-native';

// import { Container } from './styles';

export default class Workouts extends Component {
  static navigationOptions = {
    title: 'Minhas atividades',
    headerStyle: {
      backgroundColor: '#48285b',
      marginTop: 0
    },
    headerTintColor: '#fff'
  };
  render() {
    return <View />;
  }
}
