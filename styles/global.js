import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

    newHero: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    newCenter: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },

    heroIsFullHeight: {
        flex: 1,
        backgroundColor: 'black',
    },

    heroCenter: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    LogInSignUpLogo: {
        height: 110,
        width: 110,
        marginBottom: 25
    },

    LogInSignUpLogoss: {
        height: 110,
        width: 110,
        marginTop: 18
    },

    logInButton: {
        backgroundColor: 'black',
        borderColor: '#7997F3',
        borderWidth: 3,
        borderRadius: 6,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 15,
        paddingBottom: 15,
    },

    logInButtons: {
        backgroundColor: 'black',
        borderColor: '#E7CAE7',
        borderWidth: 3,
        borderRadius: 6,
        paddingLeft: 94,
        paddingRight: 94,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15
    },

    logInButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },

    moveDown: {
        marginTop: 15
    },

    signUpText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '700' 
    },

    nameText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400'
    },

    signUpInputField: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        width: '90%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black'
    }

});

export default globalStyles;