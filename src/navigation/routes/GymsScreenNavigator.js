import { createStackNavigator } from 'react-navigation';

import Gyms from '~/pages/Gyms';
import Activities from '~/modules/Activities';
// import ActivitiesList from '~/components/ActivitiesList';
import Confirmation from '~/modules/Confirmation';
import GymList from '~/components/GymList';
import Workouts from '~/pages/Workouts';

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
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default GymsScreenNavigator;
