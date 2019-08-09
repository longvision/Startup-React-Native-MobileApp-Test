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

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import { Container } from './styles';

export default class GymList extends Component {
  state = {
    gyms: []
  };

  componentDidMount() {}
  handleNavigate = item => {
    const { navigation } = this.props;

    navigation.navigate('Activities', {
      item: item
    });
  };
  render() {
    const { item } = this.props;

    console.log(item);
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
            onPress={() => this.handleNavigate(item)}
          />
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect()(GymList);
// mapStateToProps
// mapDispatchToProps

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
