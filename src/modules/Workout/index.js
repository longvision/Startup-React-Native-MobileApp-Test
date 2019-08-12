import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { format } from 'date-fns';

export default function Workout({ data }) {
  const dateFormatted = useMemo(
    () => format(new Date(data.activity.checkinDate), 'MM/DD/YYYY, hh:mm'),
    [data.activity.checkinDate]
  );
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: data.gym.logo }} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.gym}>{data.gym.title.substring(0, 32)}</Text>
          <Text style={styles.checkinStatus}>
            {data.activity.checkinStatus !== null && 'Scheduled'}
          </Text>
          <Text style={styles.activity}>{data.activity.description.title}</Text>
          <Text style={styles.time}>{dateFormatted}</Text>
        </View>
      </View>
    </View>
  );
}

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
    width: 50,
    height: 50,
    borderRadius: 25
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
    color: '#999'
  },
  activity: {
    fontSize: 13,
    marginTop: 4,
    color: '#999'
  },
  time: {
    fontSize: 13,
    marginTop: 4,
    color: '#999'
  }
});
