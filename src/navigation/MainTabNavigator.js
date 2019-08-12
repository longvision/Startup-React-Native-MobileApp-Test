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
        title: 'Minhas Atividades',
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
    shifting: false,
    activeColor: '#fee166',
    inactiveColor: '#c4c4c4',
    barStyle: {
      backgroundColor: '#48285b'
    }
  }
);

export default createAppContainer(tabNavigator);
