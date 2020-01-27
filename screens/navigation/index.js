import React, {Component, useState, useEffect} from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {View} from "react-native";
import Toggle from "../commonComponents/toggle";
import SideMenu from "../commonComponents/sideMenu/container";
import MainDashboard from "../mainDashboard/container";
import Coffee from "../coffee/container";
import Payment from "../payment/container";
import RNLocation from 'react-native-location';
import {GeoFire} from 'geofire';
import firebase from "../../utils/firebase";

RNLocation.configure({
    distanceFilter: 100, // Meters
    desiredAccuracy: {
        ios: "best",
        android: "balancedPowerAccuracy"
    },
    // Android only
    androidProvider: "auto",
    interval: 3000, // Milliseconds
    fastestInterval: 10000, // Milliseconds
    maxWaitTime: 3000, // Milliseconds
    // iOS Only
    activityType: "other",
    allowsBackgroundLocationUpdates: true,
    headingFilter: 1, // Degrees
    headingOrientation: "portrait",
    pausesLocationUpdatesAutomatically: false,
    showsBackgroundLocationIndicator: false,
})


function Navgation(porps) {
    let {id} = porps;
    useEffect(() => {
        RNLocation.requestPermission({
            ios: 'always', // or 'always'
            android: {
                detail: 'fine', // or 'fine'
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        }).then(granted => {
            if (granted) {
                startUpdatingLocation();
            }
        });
    }, []);
    const startUpdatingLocation = () => {
        RNLocation.subscribeToLocationUpdates(
            locations => {
                const lat = parseFloat(locations[0].latitude);
                const long = parseFloat(locations[0].longitude)
                const key = id;
                const geoFire = new GeoFire(firebase.database().ref("/geolocs"));
                let location = [lat, long];
                geoFire.set(key, location).then(async res => {
                })
            }
        );
    };
    return <View style={{flex: 1}}>
        <AppContainer/>
    </View>
}


const AppStack = createStackNavigator({
    Home: {
        screen: MainDashboard,
        navigationOptions: ({navigation}) => ({
            headerLeft: () => <Toggle navigation={navigation}/>,
            headerTitle: " "
        })
    },
    Coffee: {
        screen: Coffee,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Coffee"
        })
    },
    Payment: {
        screen: Payment,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Payment Method"
        })
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
            height: 80,
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
}, {
    drawerBackgroundColor: "black",
    unmountInactiveRoutes: true,
    drawerPosition: "left",
    contentComponent: SideMenu,
    defaultNavigationOptions: {}
});

const AppContainer = createAppContainer(AppNavigator);


export default Navgation;