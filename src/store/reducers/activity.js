import {
  LOAD_ACTIVITY_REQUEST,
  LOAD_ACTIVITY_SUCCESS,
  TOGGLE_ACTIVITY,
  ADD_ACTIVITY
} from '~/store/actions/activity';

import produce from 'immer';

const INITIAL_STATE = {
  history: []
};

export default function activity(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload.selectedActivity
      };

    case ADD_ACTIVITY:
      return {
        ...state,
        history: [
          ...state.history,
          {
            activity: {
              description: action.payload.activity,
              checkinStatus: action.payload.status,
              checkinDate: action.payload.date
            },
            gym: action.payload.gym
          }
        ]
      };

    case LOAD_ACTIVITY_REQUEST:
      return { ...state, loading: true };
    case LOAD_ACTIVITY_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}
console.tron.log(activity);
