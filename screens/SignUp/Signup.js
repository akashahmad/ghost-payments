import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native';

function SignUp(props) {
    let {setShow, dispatch} = props;
    const [showSignup, setShowSignup] = useState(null);
    const showComponent = () => {
        switch (showSignup) {
            case "email":
                return <SafeAreaView style={styles.signUpView}>
                    <Text style={styles.signUpTexts}>Enter Email</Text>
                    <TextInput placeholder={'email@domail.com'} style={styles.signUpInputFields}/>
                    <TouchableOpacity style={styles.signButton}
                                      onPress={() => dispatch({type: "SET_LOGGEDIN", payload: true})}>
                        <Text style={styles.logInButtonTextss}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signButton} onPress={() => setShowSignup(null)}>
                        <Text style={styles.logInButtonTextss}>BACK</Text>
                    </TouchableOpacity>
                </SafeAreaView>;
            default:
                return <SafeAreaView style={styles.signUpView}>
                    <Text style={styles.signUpTexts}>Enter Name</Text>
                    <TextInput placeholder={'First name'} style={styles.signUpInputFields}/>
                    <TextInput placeholder={'Last name'} style={styles.signUpInputFieldss}/>
                    <TouchableOpacity onPress={() => setShowSignup("email")} style={styles.signButton}>
                        <Text style={styles.logInButtonTextss}>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signButton} onPress={() => setShow(null)}>
                        <Text style={styles.logInButtonTextss}>BACK</Text>
                    </TouchableOpacity>
                </SafeAreaView>
        }
    };
    return (
        showComponent()
    )
}

export default SignUp;

const styles = StyleSheet.create({
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