import React from 'react';
import '~/config/ReactotronConfig';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import store from '~/store';

import RootNavigation from '~/navigation/RootNavigation';

console.disableYellowBox = true;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.color,
    primary: '#48285b',
    accent: '#fee166'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <RootNavigation />
        </PaperProvider>
      </Provider>
    );
  }
}
