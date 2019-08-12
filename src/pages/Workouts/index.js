import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Workout from '~/modules/Workout';

export default function Workouts() {
  const history = useSelector(state => state.activity.history);
  //TODO: check if activity is already in the list.
  //If it is, then dont list. If isnt, list.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <FlatList
        style={styles.list}
        data={history}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Workout data={item} />}
      />
    </View>
  );
}

Workouts.navigationOptions = {
  title: 'Meus Checkins',
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
    paddingHorizontal: 0
  },
  list: {
    marginTop: 15
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30
  }
});
