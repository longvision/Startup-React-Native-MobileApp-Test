// ActionTypes
export const SET_GYM_REQUEST = 'SET_GYM_REQUEST';
export const SET_GYM_SUCCESS = 'SET_GYM_SUCCESS';
export const TOGGLE_GYM = 'TOGGLE_GYM';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators

export const toggleGym = gym => ({
  type: 'TOGGLE_GYM',
  payload: { gym }
});

export const loadGymRequest = gym => ({
  type: 'SET_GYM_REQUEST',
  payload: { gym, gymId }
});

export const loadGymSuccess = data => ({
  type: 'SET_GYM_SUCCESS',
  payload: { data }
});
