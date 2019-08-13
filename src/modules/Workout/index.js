import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { format } from 'date-fns';

//Inicio do componente
export default function Workout({ data }) {
  const dateFormatted = useMemo(
    () => format(new Date(data.activity.checkinDate), 'MM/DD/YYYY, hh:mm'),
    [data.activity.checkinDate]
  );
  //Estrutura do componente filho
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: data.gym.logo }} style={styles.logo} />

        <View style={styles.info}>
          <Text style={styles.gym}>{data.gym.title}</Text>
          <Text style={styles.checkinStatus}>
            {data.activity.checkinStatus !== null && 'Checkin Done'}
          </Text>
          <Text style={styles.activity}>{data.activity.description.title}</Text>
          <Text style={styles.time}>{dateFormatted}</Text>
        </View>
      </View>
    </View>
  );
}
//Estilização do componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 20,
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex'
  },
  logo: {
    width: 60,
    height: 60
  },

  info: {
    marginLeft: 15,
    width: 220
  },
  gym: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  checkinStatus: {
    fontSize: 13,
    marginTop: 4,
    color: '#408',
    fontWeight: '500'
  },
  activity: {
    fontSize: 20,
    marginTop: 4,
    color: '#408',
    fontWeight: '500'
  },
  time: {
    fontSize: 13,
    marginTop: 4,
    color: '#999'
  }
});
