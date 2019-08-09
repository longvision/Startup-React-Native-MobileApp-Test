import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  Button,
  Dimensions
} from 'react-native';

import { AirbnbRating } from 'react-native-ratings';

import api from '~/services/api';

// import { Container } from './styles';

export default class Activities extends Component {
  static navigationOptions = {
    title: 'Activities',
    headerStyle: {
      backgroundColor: '#48285b',
      marginTop: 0
    },
    headerTintColor: '#fff'
  };

  render() {
    const { item } = this.props.navigation.state.params;

    return (
      <ImageBackground
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png'
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <View>
          {item.activities.map(i => (
            <View key={i.id}>
              <Text style={styles.title}>{i.title}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    );
  }
}

// const mapStateToProps = state => ({
//   activities:state.activities
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Activities);

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
    paddingHorizontal: 20
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
  }
});
