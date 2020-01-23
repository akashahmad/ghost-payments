import React, {useState, useEffect} from 'react';
import Auth from "../Auth";
import Navigations from "../navigation/container";
import {View, StatusBar} from "react-native";
import Loader from "../commonComponents/loader";
function App({loader, loggedIn}) {

    return <View style={{flex: 1}}>
        <StatusBar hidden/>
        {
            loggedIn ?
                <Navigations/>
                :
                <Auth/>
        }
        {
            loader &&
            <Loader/>
        }
    </View>
}


export default App;

