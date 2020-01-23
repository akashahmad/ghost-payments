import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View} from "react-native";
import Toggle from "../commonComponents/toggle";
import SideMenu from "../commonComponents/sideMenu/container";
import MainDashboard from "../mainDashboard/container";
import Login from "../LogIn/container";
import SignUp from "../SignUp";
import Auth from "../Auth";

function Navgation() {

    return <View style={{flex: 1}}>
        <AppContainer/>
    </View>
}


const AppStack = createStackNavigator({
    Home: {
        screen: MainDashboard,
        navigationOptions: ({navigation}) => ({
            headerRight: () => <Toggle navigation={navigation} />,
            headerTitle: "Home"
        })
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            headerRight: () => <Toggle navigation={navigation} />,
            headerTitle: "Log In"
        })
    },
    Signup: {
        screen: SignUp,
        navigationOptions: ({navigation}) => ({
            headerRight: () => <Toggle navigation={navigation} />,
            headerTitle: "Sign Up"
        })
    },
    Auth: {
        screen: Auth,
        navigationOptions: ({navigation}) => ({
            headerRight: () => <Toggle navigation={navigation} />,
        })
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
            height: 70,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            textAlign: "center",
            flex: 1,
            fontSize: 16
        }
    },
});

const AppNavigator = createDrawerNavigator({
    Home: AppStack
},{
    drawerBackgroundColor: "black",
    unmountInactiveRoutes: true,
    drawerPosition: "right",
    contentComponent: SideMenu,
    defaultNavigationOptions:{

    }
});

const AppContainer = createAppContainer(AppNavigator);


export default Navgation;