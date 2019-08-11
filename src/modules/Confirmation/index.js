import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Button, Text } from 'react-native';

import { parseISO, format, setHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as ActivitiesActions from '~/store/actions/activity';
import api from '~/services/api';

export default function Confirm({ navigation }) {
  const gym = useSelector(state => state.gym.selectedGym);
  const activity = useSelector(state => state.activity.selectedActivity);
  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({});

  const dateFormatted = useMemo(
    () => format(new Date(response.checkinDate), 'MM/DD/YYYY'),
    [response.checkinDate]
  );

  function handleConfirm() {
    setConfirm(true);
  }
  function handleOk() {
    navigation.navigate('Workouts');
  }

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
        });
    }
  }, [confirm]);

  return (
    <View style={styles.container}>
      <Text>{activity.title}</Text>

      <Text>{response.checkinStatus}</Text>
      {response.checkinDate === undefined ? null : <Text>{dateFormatted}</Text>}
      {!confirm ? (
        <Button onPress={handleConfirm} title="Confirmar agendamento" />
      ) : (
        <Button onPress={handleOk} title="OK" />
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
    flex: 1,
    paddingHorizontal: 20
  }
});
