import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import * as ActivitiesActions from '~/store/actions/activity';

export default function Activities({ navigation }) {
  const activities = useSelector(state => state.gym.selectedGym.activities);
  const dispatch = useDispatch();

  handleNavigate = activity => {
    navigation.navigate('Confirmation', { navigation });
    dispatch(ActivitiesActions.toggleActivity(activity));
  };

  return (
    <View style={styles.container}>
      {activities.map(activity => (
        <View key={activity.id} style={styles.card}>
          <Text style={styles.title}>{activity.title}</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.handleNavigate(activity)}
          >
            <Icon name="whatshot" size={34} color="red" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

Activities.navigationOptions = {
  title: 'Selecione a atividade desejada',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
};

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
