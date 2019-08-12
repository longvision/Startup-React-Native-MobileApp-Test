import {
  LOAD_ACTIVITY_REQUEST,
  LOAD_ACTIVITY_SUCCESS,
  TOGGLE_ACTIVITY,
  ADD_ACTIVITY
} from '../actions/activity';

const INITIAL_STATE = {
  history: []
};

export default function activity(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload.activity
      };

    case ADD_ACTIVITY: {
      return {
        ...state,
        history: [
          ...state.history,
          {
            activity: {
              description: action.payload.activity,
              checkin: action.payload.response
            },
            gym: action.payload.gym
          }
        ]
      };
    }

    case LOAD_ACTIVITY_REQUEST:
      return { ...state, loading: true };
    case LOAD_ACTIVITY_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}
console.tron.log(activity);
