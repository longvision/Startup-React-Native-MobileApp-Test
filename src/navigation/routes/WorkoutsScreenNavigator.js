import { createStackNavigator } from 'react-navigation';

import Workouts from '~/pages/Workouts';
import Gyms from '~/pages/Gyms';
import Main from '~/pages/Main';

const WorkoutsScreenNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Gyms: {
      screen: Gyms
    },
    Workouts: {
      screen: Workouts
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default WorkoutsScreenNavigator;
