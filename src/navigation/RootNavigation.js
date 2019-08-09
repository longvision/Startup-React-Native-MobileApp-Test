import React from 'react';
import TabNavigator from './MainTabNavigator';
// import AuthNavigator from '~/modules/auth/AuthNavigator';
// import FocusNavigator from '~/modules/auth/FocusNavigator';
// import { connect } from 'react-redux';

export default class RootNavigation extends React.Component {
  render() {
    return <TabNavigator />;
  }
}
