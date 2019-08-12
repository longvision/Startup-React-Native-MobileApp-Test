import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import Workout from '~/modules/Workout';

export default function Workouts() {
  const history = useSelector(state => state.activity.history);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
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
  title: 'Minhas atividades',
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
    marginTop: 15,
    padding: 30
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30
  }
});
