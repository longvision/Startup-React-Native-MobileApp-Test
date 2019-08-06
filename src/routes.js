import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Gyms from '~/pages/Gyms';

const Routes = createAppContainer(createSwitchNavigator({ Main, Gyms }));

export default Routes;
