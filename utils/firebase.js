import React from "react";
import firebase from "react-native-firebase";
import { Platform } from "react-native";


const iosConfig =  {
    clientId: "887552431013-ibcfqit3ras3npq20q35gfuouag31j59.apps.googleusercontent.com",
    apiKey: "AIzaSyCmwvE24ptDmbwTrhMu8qsZ6NEQG5HB2Dw",
    authDomain: "fur-baby-tracker-dev.firebaseapp.com",
    databaseURL: "https://fur-baby-tracker-dev.firebaseio.com",
    projectId: "fur-baby-tracker-dev",
    storageBucket: "fur-baby-tracker-dev.appspot.com",
    messagingSenderId: "887552431013",
    appId: "1:887552431013:ios:dfbc94d6f26f010f2dce4c"
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