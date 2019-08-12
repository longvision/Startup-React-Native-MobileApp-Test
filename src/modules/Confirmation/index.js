import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { format } from 'date-fns';

import api from '~/services/api';
import * as ActivityActions from '~/store/actions/activity';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Confirmation({ navigation }) {
  const gym = useSelector(state => state.gym.selectedGym);
  const activity = useSelector(state => state.activity.selectedActivity);

  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({});

  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(new Date(response.checkinDate), 'MM/DD/YYYY, hh:mm'),
    [response.checkinDate]
  );

  const handleConfirm = useCallback(() => {
    setConfirm(true);
  }, [confirm]);

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
        .then(async res => {
          setResponse(res.data);
          dispatch(
            ActivityActions.addActivity(
              activity,
              gym,
              res.data.checkinStatus,
              res.data.checkinDate
            )
          );
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
        <View style={styles.button}>
          <Button
            onPress={handleConfirm}
            color="#fee166"
            title="Fazer checkin"
          />
        </View>
      ) : (
        <View style={styles.button}>
          <Button onPress={handleOk} color="#fee166" title="OK" />
        </View>
      )}
    </View>
  );
}

Confirmation.navigationOptions = () => ({
  title: 'Confirmar',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
});

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
    alignSelf: 'center',
    marginTop: 15,
    borderColor: '#fee166',
    borderWidth: 2,
    borderRadius: 15
  }
});
