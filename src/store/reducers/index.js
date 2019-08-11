import { combineReducers } from 'redux';

import gym from './gym';
import activity from './activity';

export default combineReducers({
  gym,
  activity
});
