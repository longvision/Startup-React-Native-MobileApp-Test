import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Button, Text } from 'react-native';

import { parseISO, formatRelative, setHours } from 'date-fns';
import * as ActivitiesActions from '~/store/actions/activity';
import api from '~/services/api';

export default function Confirm() {
  // static navigationOptions = {
  //   title: 'Confirmar Atividade',
  //   headerStyle: {
  //     backgroundColor: '#48285b',
  //     marginTop: 0
  //   },
  //   headerTintColor: '#fff'
  // };
  // const [res, setData] = useState([]);
  const [confirm, setConfirm] = useState(false);

  const [res, setRes] = useState({});

  const gym = useSelector(state => state.gym.selectedGym);
  const activity = useSelector(state => state.activity.selectedActivity);

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
          setRes(res.data);
        });
    }
  }, [confirm]);

  return (
    <>
      <View style={styles.container}>
        <Text>{activity.title}</Text>
        <Button onPress={setConfirm(true)} title="Confirmar agendamento" />
        <Text>{res.checkinDate}</Text>
        <Text>{res.checkinStatus}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    flex: 1,
    paddingHorizontal: 20
  }
});
