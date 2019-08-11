import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import GymsScreenNavigator from '~/navigation/routes/GymsScreenNavigator';
import MainScreenNavigator from '~/navigation/routes/MainScreenNavigator';
import WorkoutsScreenNavigator from '~/navigation/routes/WorkoutsScreenNavigator';

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Gyms: {
      screen: GymsScreenNavigator,
      navigationOptions: {
        title: 'Gyms',
        tabBarIcon: ({ focused }) => (
          <Icon
            name={`dashboard`}
            type={'material'}
            color={focused ? '#fee166' : '#c4c4c4'}
          />
        )
      }
    },
    Workouts: {
      screen: WorkoutsScreenNavigator,
      navigationOptions: {
        title: 'My Workouts',
        tabBarIcon: ({ focused }) => (
          <Icon
            name={'checkbox-marked-outline'}
            type={'material-community'}
            color={focused ? '#fee166' : '#c4c4c4'}
          />
        )
      }
    },
    Main: {
      screen: MainScreenNavigator,
      navigationOptions: {
        title: 'Main',
        tabBarIcon: ({ focused }) => (
          <Icon
            name={'checkbox-marked-outline'}
            type={'material-community'}
            color={focused ? '#fee166' : '#c4c4c4'}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Gyms',
    shifting: true,
    activeColor: '#fee166',
    inactiveColor: '#c4c4c4',
    barStyle: {
      backgroundColor: '#48285b'
    },
    tabBarColor: '#fee166'
  }
);

export default createAppContainer(tabNavigator);
