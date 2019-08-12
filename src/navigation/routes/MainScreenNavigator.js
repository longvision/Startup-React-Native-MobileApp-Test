import { createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';

const MainScreenNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    }
  },
  {
    cardStyle: { backgroundColor: '#48285b' }
  }
);

export default MainScreenNavigator;
