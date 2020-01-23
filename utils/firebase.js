import React from "react";
import firebase from "react-native-firebase";
import { Platform } from "react-native";


const iosConfig =  {
    clientId: "264237725329-f95sd04n49078f9l1k93igb81l2cs89a.apps.googleusercontent.com",
    apiKey: "AIzaSyDw_xwhYY4e_Q_NW9bgTeihqRUMuAIjXgU",
    authDomain: "ghost-payments.firebaseapp.com",
    databaseURL: "https://ghost-payments.firebaseio.com",
    projectId: "ghost-payments",
    storageBucket: "ghost-payments.appspot.com",
    messagingSenderId: "264237725329",
    appId: "1:264237725329:ios:872f9fdc515e92cdd43130"
}
const androidConfig = {
    clientId: "264237725329-ud011q3u5grk8tqekalil433hfqnqdm9.apps.googleusercontent.com",
    apiKey: "AIzaSyC-5fmhKbETRr0OYQat1XEHxMC3y4vYI6Y",
    authDomain: "ghost-payments.firebaseapp.com",
    databaseURL: "https://ghost-payments.firebaseio.com",
    projectId: "ghost-payments",
    storageBucket: "ghost-payments.appspot.com",
    messagingSenderId: "264237725329",
    appId: "1:264237725329:android:f4e765c6033f4093d43130"
}

firebase.initializeApp(
    Platform.OS === "ios" ? iosConfig: androidConfig
);

export default firebase;