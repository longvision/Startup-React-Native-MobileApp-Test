import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Main from '~/pages/Main';
import Gyms from '~/pages/Gyms';
import Activities from '~/pages/Activities';
import List from '~/pages/List';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main: createSwitchNavigator({
      Main
    }),
    App: createBottomTabNavigator(
      {
        Gyms,
        Activities: {
          screen: createStackNavigator(
            {
              Activities
              // Confirm
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                  marginLeft: 20
                }
              }
            }
          ),
          navigationOptions: {
            tabBarLabel: 'Atividades',
            tabBarIcon: <Icon name="date-range" size={20} color="#fee166" />
          }
        }
        // Maps
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#fee166',
          inactiveTintColor: '#c4c4c4',
          style: {
            backgroundColor: '#48285b'
          }
        }
      }
    )
  })
);
export default Routes;
