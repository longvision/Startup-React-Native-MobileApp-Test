import { createStackNavigator } from 'react-navigation';

import Gyms from '~/pages/Gyms';
import Activities from '~/modules/Activities';
import Confirmation from '~/modules/Confirmation';
import GymList from '~/components/GymList';
import Workouts from '~/pages/Workouts';
import Main from '~/pages/Main';

const GymsScreenNavigator = createStackNavigator(
  {
    Gyms: {
      screen: Gyms
    },
    Activities: {
      screen: Activities
    },
    Confirmation: {
      screen: Confirmation
    },
    GymList: {
      screen: GymList
    },
    Workouts: {
      screen: Workouts
    },
    Main: {
      screen: Main
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default GymsScreenNavigator;
