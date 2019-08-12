import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image, Button, Text } from 'react-native';

import { parseISO, format, setHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import * as ActivityActions from '~/store/actions/activity';

export default function Confirm({ navigation }) {
  const gym = useSelector(state => state.gym.selectedGym);
  const activity = useSelector(state => state.activity.selectedActivity);

  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({});

  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(new Date(response.checkinDate), 'MM/DD/YYYY, hh:mm'),
    [response.checkinDate]
  );

  const handleConfirm = useCallback(async () => {
    setConfirm(true);
    await dispatch(ActivityActions.addActivity(activity, gym, response));
  }, [activity, gym, response]);

  const handleOk = useCallback(() => {
    navigation.navigate('Workouts');
  }, []);

  useEffect(() => {
    if (confirm === true) {
      api
        .post(`/checkin?gymId=${gym.id}&activityId=${activity.id}`, {
          gymId: gym.id,
          activityId: activity.id
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          // setDate(res.data.checkinDate);
          // setStatus(res.data.checkinStatus);
          setResponse(res.data);
          // dispatch(ActivityActions.checkin(activity, gym, response));
        });
    }
  }, [confirm]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: gym.logo }} />
      <Text style={styles.title}>{activity.title}</Text>

      <Text style={styles.checkin}>{response.checkinStatus}</Text>
      {response.checkinDate === undefined ? null : (
        <Text style={styles.checkin}>{dateFormatted}</Text>
      )}
      {!confirm ? (
        <Button
          onPress={handleConfirm}
          style={styles.button}
          title="Confirmar agendamento"
        />
      ) : (
        <Button onPress={handleOk} style={styles.button} title="OK" />
      )}
    </View>
  );
}

// Confirmation.navigationOptions = ({ navigation }) => ({
//   title: 'Confirmar',
//   headerStyle: {
//     backgroundColor: '#48285b',
//     marginTop: 0
//   },
//   headerTintColor: '#fff'
// });

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    flex: 1
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  checkin: {
    marginTop: 4,
    fontSize: 18,
    color: '#fee166'
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 25,
    color: '#FFF'
  }
});
