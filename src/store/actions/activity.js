// ActionTypes
export const SET_ACTIVITY_REQUEST = 'SET_ACTIVITY_REQUEST';
export const SET_ACTIVITY_SUCCESS = 'SET_ACTIVITY_SUCCESS';
export const TOGGLE_ACTIVITY = 'TOGGLE_ACTIVITY';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators

export const toggleActivity = activity => ({
  type: 'TOGGLE_ACTIVITY',
  payload: { activity }
});

export const loadActivityRequest = activity => ({
  type: 'SET_ACTIVITY_REQUEST',
  payload: { activity, activityId }
});

export const loadActivitySuccess = data => ({
  type: 'SET_ACTIVITY_SUCCESS',
  payload: { data }
});
