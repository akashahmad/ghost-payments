import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Auth from '../screens/Auth';
import LogIn from '../screens/LogIn/LogIn';
import SignUp from '../screens/SignUp/container';

const screens = {
    Auth: {
        screen: Auth
    },
    LogIn: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    }
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);