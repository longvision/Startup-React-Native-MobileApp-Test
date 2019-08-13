import { TOGGLE_GYM } from '../actions/gym';

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

    default:
      return state;
  }
}
console.tron.log(gym);
