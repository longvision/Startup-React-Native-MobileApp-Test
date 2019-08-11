import { createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Gyms from '~/pages/Gyms';
import Workouts from '~/pages/Workouts';

const MainScreenNavigator = createStackNavigator(
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

export default MainScreenNavigator;
