import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions
} from 'react-native';

import { AirbnbRating } from 'react-native-ratings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GymsActions from '~/store/actions/gym';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import { Container } from './styles';

class GymList extends Component {
  componentDidMount() {}
  handleNavigate = item => {
    const { navigation, toggleGym } = this.props;

    navigation.navigate('Activities');
    toggleGym(item);
  };
  render() {
    const { item } = this.props;

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
          <Button
            title="Atividades"
            color="#48285b"
            onPress={() => this.handleNavigate(item)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(GymsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GymList);

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
  }
});
