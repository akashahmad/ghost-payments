import React, {useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import globalStyles from '../styles/global';
import LogSignImageLogo from '../assets/img/log-sign-logo.png';
import Login from "./LogIn/container";
import Signup from "./SignUp/container";
function Auth() {
    const [show, setShow] = useState(null);
    const showComponent = () => {
        switch (show) {
            case "login":
                return <Login setShow={setShow}/>;
            case "signup":
                return <Signup setShow={setShow}/>;
            default:
                return <View style={globalStyles.newHero}>
                    <Image
                        source={LogSignImageLogo}
                        style={globalStyles.LogInSignUpLogo}
                    />
                    <TouchableOpacity onPress={() => setShow("login")} style={globalStyles.logInButton}>
                        <Text style={globalStyles.logInButtonText}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShow("signup")} style={globalStyles.logInButtons}>
                        <Text style={globalStyles.logInButtonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
        }
    };
    return (
        showComponent()
    )
}

export default Auth;
