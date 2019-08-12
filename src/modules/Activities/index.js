import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActivitiesActions from '~/store/actions/activity';

// TODO: transform in function component
class Activities extends Component {
  static navigationOptions = {
    title: 'Selecione a atividade desejada',
    headerStyle: {
      backgroundColor: '#48285b',
      marginTop: 0
    },
    headerTintColor: '#fff'
  };

  handleNavigate = selectedActivity => {
    const { toggleActivity, navigation } = this.props;
    navigation.navigate('Confirmation', { navigation });
    toggleActivity(selectedActivity);
  };
  render() {
    const { activities } = this.props;
    return (
      <View style={styles.container}>
        {activities.map(activity => (
          <View key={activity.id} style={styles.card}>
            <Text style={styles.title}>{activity.title}</Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.handleNavigate(activity)}
            >
              <Icon name="event-busy" size={20} color="#f64c75" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.gym.selectedGym.activities
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActivitiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activities);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  icon: {
    alignItems: 'flex-end'
  },
  card: {
    padding: 20,
    marginTop: 30,
    margin: 10,
    borderRadius: 4,
    backgroundColor: '#fff',
    display: 'flex',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 320
  },

  title: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'flex-start'
  }
});
