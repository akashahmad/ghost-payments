import React, {useState, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import firebase from "../../utils/firebase";

function Layout(props) {
    let {dispatch} = props;
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref("/users/" + user.uid).on('value', (snapshot) => {
                    let data = {...snapshot.val()};
                    dispatch({
                        type: "SET_USER",
                        payload: data
                    });
                    dispatch({
                        type: "SET_ID",
                        payload: user.uid
                    });
                    dispatch({
                        type: "SET_LOADER",
                        payload: false
                    });
                    dispatch({
                        type: "SET_LOGGEDIN",
                        payload: true
                    });
                });
            }else {
                dispatch({
                    type: "SET_USER",
                    payload: null
                });
                dispatch({
                    type: "SET_ID",
                    payload: null
                });
                dispatch({
                    type: "SET_LOGGEDIN",
                    payload: false
                });
            }
        });
    }, []);

    return <View style={style.main}>
        {props.children}
    </View>
}

export default Layout;

const style = StyleSheet.create({
    main: {
        flex: 1
    }
})