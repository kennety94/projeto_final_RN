import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './../pages/Home';
import Login from './../pages/Login'

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        },
    },
    Home: {
        screen: Home
    }
});

export default Routes = createAppContainer(AppNavigator);