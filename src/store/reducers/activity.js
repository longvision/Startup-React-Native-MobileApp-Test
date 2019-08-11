import {
  LOAD_ACTIVITY_REQUEST,
  LOAD_ACTIVITY_SUCCESS,
  TOGGLE_ACTIVITY
} from '../actions/activity';

const INITIAL_STATE = {
  data: [],
  loading: false,
  selectedActivity: {}
};

export default function activity(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_ACTIVITY:
      return {
        ...state,
        selectedActivity: action.payload.activity
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
