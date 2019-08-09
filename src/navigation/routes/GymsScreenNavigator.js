import { createStackNavigator } from 'react-navigation';

import Gyms from '~/pages/Gyms';
import Activities from '~/modules/Activities';
import Confirm from '~/modules/Confirm';
import GymList from '~/components/GymList';

const GymsScreenNavigator = createStackNavigator(
  {
    Gyms: {
      screen: Gyms
    },
    Activities: {
      screen: Activities
    },
    Confirm: {
      screen: Confirm
    },
    GymList: {
      screen: GymList
    },
    Confirm: {
      screen: Confirm
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default GymsScreenNavigator;
