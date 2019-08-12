import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

import { useSelector } from 'redux';
// import { Container } from './styles';

export default function Workouts() {
  const history = useSelector(state => state.activity.history);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      <FlatList
        styles={styles.list}
        data={history}
        keyExtractor={item => String(item)}
        render={({ item }) => <Activities activities={item} />}
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
    marginTop: 20,
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
