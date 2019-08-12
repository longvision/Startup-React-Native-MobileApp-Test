import { createStackNavigator } from 'react-navigation';

import Gyms from '~/pages/Gyms';
import Activities from '~/modules/Activities';
import Confirmation from '~/modules/Confirmation';
import GymList from '~/components/GymList';
import WorkoutsScreenNavigator from './WorkoutsScreenNavigator';

const GymsScreenNavigator = createStackNavigator(
  {
    Gyms: {
      screen: Gyms
    },
    GymList: {
      screen: GymList
    },
    Activities: {
      screen: Activities
    },
    Confirmation: {
      screen: Confirmation
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default GymsScreenNavigator;
