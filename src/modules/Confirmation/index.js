import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { format } from 'date-fns';

import api from '~/services/api';
import * as ActivityActions from '~/store/actions/activity';

//Inicio do componente
export default function Confirmation({ navigation }) {
  //Estados provenientes da Store:
  const gym = useSelector(state => state.gym.selectedGym);
  const selectedActivity = useSelector(
    state => state.activity.selectedActivity
  );
  const history = useSelector(state => state.activity.history);
  //Estados locais:
  const [confirm, setConfirm] = useState(false);
  const [response, setResponse] = useState({});
  const [duplicatedId, setDuplicatedId] = useState(false);
  const [duplicatedDay, setDuplicatedDay] = useState(false);

  //Verifica se usuário já fez check in no mesmo dia('componentDidMount')
  useEffect(() => {
    history.filter(item => {
      format(new Date(item.activity.checkinDate), 'MM/DD/YYYY') ===
      format(new Date(response.checkinDate), 'MM/DD/YYYY')
        ? setDuplicatedDay(true)
        : setDuplicatedDay(false);
    });
  }, []);

  // Verifica se o usuário já fez check in na mesma atividade.('componentDidMount')
  useEffect(() => {
    if (history !== undefined) {
      history.filter(item => {
        item.activity.description.id === selectedActivity.id
          ? setDuplicatedId(true)
          : setDuplicatedId(false);
      });
    }
  }, []);

  //Dispara a ação para o Reducer
  const dispatch = useDispatch();

  // Formata a hora da atividade cadatrada para o usuário poder vê-la
  const dateFormatted = useMemo(
    () => format(new Date(response.checkinDate), 'MM/DD/YYYY, hh:mm'),
    [response.checkinDate]
  );
  //Caso o usuário confirme, dispara o Hook abaixo;
  const handleConfirm = useCallback(() => {
    setConfirm(true);
  }, [confirm]);

  //Hook onde o usuário faz o checkIn caso a atividade não seja duplicada nem
  //tenha sido feita no mesmo dia.
  useEffect(() => {
    if (confirm === true) {
      api
        .post(`/checkin?gymId=${gym.id}&activityId=${selectedActivity.id}`, {
          gymId: gym.id,
          activityId: selectedActivity.id
        })
        .then(async res => {
          setResponse(res.data);
          //TODO: checkbelow code

          if (duplicatedId === false && duplicatedDay === false) {
            dispatch(
              ActivityActions.addActivity(
                selectedActivity,
                gym,
                res.data.checkinStatus,
                res.data.checkinDate
              )
            );
          }
        });
    }
  }, [confirm]);

  //Ao confirmar OK, o usuário é direcionado para a tela de Workouts, com os
  //seus check ins listados.
  const handleOk = useCallback(() => {
    navigation.navigate('Workouts');
  }, []);

  //Estrutura do componente
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: gym.logo }} />
      <Text style={styles.title}>{selectedActivity.title}</Text>
      {duplicatedId === false && duplicatedDay === false ? (
        <View style={styles.statusView}>
          <Text style={styles.checkin}>{response.checkinStatus}</Text>
          {response.checkinDate === undefined ? null : (
            <Text style={styles.checkin}>{dateFormatted}</Text>
          )}
        </View>
      ) : (
        <View style={styles.statusView}>
          <Text style={styles.checkin}>
            O checkin desta atividade já foi feito hoje.
          </Text>
          {response.checkinDate === undefined ? null : (
            <Text style={styles.checkin}>
              Aguarde até amanhã ou escolha outra atividade.
            </Text>
          )}
        </View>
      )}
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
//Barra superior de navegação do componente
Confirmation.navigationOptions = () => ({
  title: 'Confirmar',
  headerStyle: {
    backgroundColor: '#48285b',
    marginTop: 0
  },
  headerTintColor: '#fff'
});

//Estilização do componente
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
