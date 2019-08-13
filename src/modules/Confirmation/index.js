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
  const history = useSelector(state => state.history);

  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({});

  // TODO:Check below code
  const canDispatch = useCallback(() => {
    const duplicated = history.map(i => {
      i.activity.description.id === activity.id && false;
    });
    (history === [] || !duplicated) && true;
  }, []);

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
          //TODO: checkbelow code
          if (canDispatch)
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
      <View style={styles.statusView}>
        <Text style={styles.checkin}>{response.checkinStatus}</Text>
        {response.checkinDate === undefined ? null : (
          <Text style={styles.checkin}>{dateFormatted}</Text>
        )}
      </View>
      {!confirm ? (
        <View style={styles.button}>
          <Button
            onPress={handleConfirm}
            color="#48285b"
            title="Fazer checkin"
          />
        </View>
      ) : (
        <View style={styles.button}>
          <Button onPress={handleOk} color="#48285b" title="OK" />
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
    flex: 1,
    backgroundColor: '#fff'
  },
  logo: {
    width: 175,
    height: 175,
    borderRadius: 100,
    padding: 10,
    marginBottom: 100
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#48285b'
  },
  statusView: {
    margin: 25,
    height: 60
  },
  checkin: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#199',
    alignContent: 'center'
  },
  button: {
    alignSelf: 'center',
    marginTop: 25,
    borderColor: '#48285b',
    backgroundColor: '#fee166',
    minWidth: 140,
    borderWidth: 3,
    borderRadius: 15
  }
});
