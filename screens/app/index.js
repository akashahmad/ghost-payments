import React, {useState, useEffect} from 'react';
import Login from "../LogIn/container";
import Navigations from "../navigation/container";
import {View, StatusBar} from "react-native";
import Loader from "../commonComponents/loader";
function App({loader, loggedIn}) {

    return <View style={{flex: 1}}>
        <StatusBar hidden/>
        {
            // loggedIn ?
                <Navigations/>
                // :
                // <Login/>
        }
        {
            loader &&
            <Loader/>
        }
    </View>
}


export default App;

