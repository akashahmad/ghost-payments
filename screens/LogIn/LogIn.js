import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button, StyleSheet} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native';
import globalStyles from '../../styles/global';
import LogSignImageLogo from '../../assets/img/log-sign-logo.png';
import firebase from "../../utils/firebase";
import ArrowImage from '../../assets/img/arrow.png';
function LogIn(props) {
    let {dispatch, setShow} = props;
    const [email, setEmail] = useState(null);
    const [emailEmpty, setEmailEmp] = useState(false);
    const [password, setPass] = useState(null);
    const [passwordEmpty, setPassEmp] = useState(null);
    const [message, setMessage] = useState(null);

    const signIn = () => {
        setEmailEmp(!email);
        setPassEmp(!password);
        if (!email || !password) {
            return;
        }
        dispatch({
            type: "SET_LOADER",
            payload: true
        });
        setMessage('Signing in...');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(confirmResult => {
                setMessage(null);
            })
            .catch(error => {
                dispatch({
                    type: "SET_LOADER",
                    payload: false
                });
                setMessage(`Something went wrong please try again!`);
            });
    };
    const setEmailVal = (value) => {
        setEmail(value);
        setEmailEmp(!value);
    };
    const setPassVal = (value) => {
        setPass(value);
        setPassEmp(!value);
    };
    return (
        <SafeAreaView style={styles.signUpView}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.fullWidth}>
                <TouchableOpacity onPress={() => setShow(null)}>
                    <Image
                        source={ArrowImage}
                        style={styles.arrowStyle}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <Image
                source={LogSignImageLogo}
                style={globalStyles.LogInSignUpLogoss}
            />
            <TextInput placeholder={'Email address'}
                       autoFocus
                       onChangeText={value => setEmailVal(value.replace(/\s/g, ''))}
                       autoCorrect={false}
                       autoCapitalize='none'
                       style={styles.signUpInputFields}/>
            {
                emailEmpty &&
                <Text style={{color: "red"}}>Email field is required</Text>
            }
            <TextInput placeholder={'Password'}
                       onChangeText={value => setPassVal(value)}
                       autoCorrect={false}
                       secureTextEntry={true}
                       style={styles.signUpInputFieldss}/>
            {
                passwordEmpty &&
                <Text style={{color: "red"}}>Password field is required</Text>
            }
            <TouchableOpacity onPress={() => signIn()}
                              style={styles.signButton}>
                <Text style={styles.logInButtonTextss}>LOG IN</Text>
            </TouchableOpacity>
            <Text style={message === 'Signing in...' ? {color: "white"} : {color: "red"}}>{message}</Text>
        </SafeAreaView>
    )
}

export default LogIn;

const styles = StyleSheet.create({

    fullWidth: {
        width: '100%',
        display: 'flex',
        textAlign: 'left',
        marginLeft: 35
    },

    arrowStyle: {
        height: 16,
        width: 16,
    },

    signUpView: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center'
    },

    signUpTexts: {
        paddingTop: 40,
        fontSize: 35,
        color: 'white',
        fontWeight: '600'
    },

    nameTexts: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        paddingLeft: 20,
        paddingTop: 20
    },

    signUpInputFields: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        width: '90%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 25
    },

    nameTextss: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        paddingLeft: 20,
        paddingTop: 15
    },

    signUpInputFieldss: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        width: '90%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 14
    },

    signButton: {
        backgroundColor: 'black',
        borderColor: '#7997F3',
        borderWidth: 3,
        borderRadius: 6,
        width: '90%',
        marginTop: 20,
        paddingTop: 14,
        paddingBottom: 14,
        // marginTop: 25
    },

    logInButtonTextss: {
        color: 'white',
        fontWeight: '800',
        fontSize: 16,
        textAlign: 'center'
    },

});