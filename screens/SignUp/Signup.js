import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native';
import ArrowImage from '../../assets/img/arrow.png';
import firebase from "../../utils/firebase";
import {showMessage} from "react-native-flash-message";

function SignUp(props) {
    let {setShow, dispatch} = props;
    const [showSignup, setShowSignup] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameValidator, setFirstNameValidator] = useState(false);
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidator, setPasswordValidator] = useState(false);
    const signupHandler = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
            let uid = data.user.uid;
            let userObj = {
                firstName: firstName,
                lastName: lastName,
                email,
                photoURL: "",
                uid: uid
            };
            firebase.database().ref("/users").child(uid).set(userObj).then(res => {
            })
                .catch(err => {
                    showMessage({
                        message: error.message,
                        type: "danger",
                        backgroundColor: "red",
                        color: "white",
                        icon: "danger"
                    });
                })
        }).catch(function (error) {
            showMessage({
                message: error.message,
                type: "danger",
                backgroundColor: "red",
                color: "white",
                icon: "danger"
            });
        });
    };
    const showComponent = () => {
        switch (showSignup) {
            case "email":
                return <SafeAreaView style={styles.signUpView}>
                    <View style={styles.fullWidth}>
                        <TouchableOpacity onPress={() => setShowSignup(null)}>
                            <Image
                                source={ArrowImage}
                                style={styles.arrowStyle}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.signUpTexts}>Enter Email</Text>
                    <TextInput placeholder={'Email address'}
                               value={email ? email : ""}
                               onChangeText={value => {
                                   setEmailValidator(false);
                                   setEmail(value.replace(/\s/g, ''))
                               }}
                               style={styles.signUpInputFields}/>
                    {
                        emailValidator &&
                        <Text style={{color: "red"}}>Email field is required</Text>
                    }
                    <TouchableOpacity style={styles.signButton}
                                      onPress={() => {
                                          if (!email | email === "") {
                                              setEmailValidator(true)
                                          } else {
                                              setShowSignup("password")
                                          }
                                      }}>
                        <Text style={styles.logInButtonTextss}>NEXT</Text>
                    </TouchableOpacity>
                </SafeAreaView>;
            case "password":
                return <SafeAreaView style={styles.signUpView}>
                    <View style={styles.fullWidth}>
                        <TouchableOpacity onPress={() => setShowSignup("email")}>
                            <Image
                                source={ArrowImage}
                                style={styles.arrowStyle}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.signUpTexts}>Enter Password</Text>
                    <TextInput
                        placeholder={'Password'}
                        value={password ? password : ""}
                        onChangeText={value => {
                            setPasswordValidator(false);
                            setPassword(value)
                        }}
                        secureTextEntry={true}
                        style={styles.signUpInputFields}
                    />
                    {
                        passwordValidator &&
                        <Text
                            style={{color: "red"}}>{password ? "Password length should be 8 characters" : "This field is required"}</Text>
                    }
                    <TouchableOpacity style={styles.signButton}
                                      onPress={() => {
                                          if (!password || password.length < 8) {
                                              setPasswordValidator(true)
                                          } else {
                                              signupHandler()
                                          }
                                      }}>
                        <Text style={styles.logInButtonTextss}>SIGN UP</Text>
                    </TouchableOpacity>
                </SafeAreaView>;
            default:
                return <SafeAreaView style={styles.signUpView}>
                    <View style={styles.fullWidth}>
                        <TouchableOpacity onPress={() => setShow(null)}>
                            <Image
                                source={ArrowImage}
                                style={styles.arrowStyle}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.signUpTexts}>Enter Name</Text>
                    <TextInput
                        placeholder={'First name'}
                        autoFocus
                        value={firstName ? firstName : ""}
                        onChangeText={value => {
                            setFirstNameValidator(false);
                            setFirstName(value)
                        }}
                        style={styles.signUpInputFields}/>
                    {
                        firstNameValidator &&
                        <Text style={{color: "red"}}>First Name is required</Text>
                    }
                    <TextInput
                        onChangeText={value => setLastName(value)}
                        placeholder={'Last name'}
                        value={lastName ? lastName : ""}
                        style={styles.signUpInputFieldss}/>
                    <TouchableOpacity onPress={() => {
                        if (!firstName) {
                            setFirstNameValidator(true)
                        } else {
                            setShowSignup("email")
                        }
                    }} style={styles.signButton}>
                        <Text style={styles.logInButtonTextss}>NEXT</Text>
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