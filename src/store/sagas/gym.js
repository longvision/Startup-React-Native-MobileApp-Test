import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import history from '../../services/history';

import { loadGymSuccess } from '../actions/gym';

// A Action tem acesso ao payload da ACTION
export function* listGym(action) {
  try {
    // Primeiro parametro da call vem a api, no segundo parametro vem o restante da requisição.
    const response = yield call(api.get, `/gym/${action.payload.full_name}`);
    yield put(loadGymSuccess(response.data));
    history.push('/gym');
    console.tron.log('sucesso');
  } catch (err) {
    // yield put(loadFailure());
    console.tron.log('error');
  }
}
