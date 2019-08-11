import { LOAD_GYM_REQUEST, LOAD_GYM_SUCCESS, TOGGLE_GYM } from '../actions/gym';

const INITIAL_STATE = {
  data: [],
  loading: false,
  selectedGym: {}
};

export default function gym(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_GYM:
      return {
        ...state,
        selectedGym: action.payload.gym
      };
    case LOAD_GYM_REQUEST:
      return { ...state, loading: true };
    case LOAD_GYM_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}
console.tron.log(gym);
