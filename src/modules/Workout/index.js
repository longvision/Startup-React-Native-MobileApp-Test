import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Workout({ history }) {
  return (
    <View>
      {history.map(item => (
        <View style={styles.container}>
          <View style={styles.left}>
            <Image source={{ uri: item.gym.logo }} style={styles.logo} />
            <View style={styles.info}>
              <Text style={styles.gym}>{item.activity.title}</Text>
              <Text style={styles.checkinStatus}>
                {item.activity.checkinStatus}
              </Text>
              <Text style={styles.activity}>{item.activity.title}</Text>
              <Text style={styles.time}>{item.activity.title}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="event-busy" size={20} color="#f64c75" />
          </TouchableOpacity>
        </View>
      ))}
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
    marginBottom: 5,
    borderRadius: 4,
    background: '#fff'
  },
  left: {
    flexDirection: 'row',
    alignItem: 'center',
    display: 'flex'
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    marginLeft: 15
  },
  gym: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold'
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
