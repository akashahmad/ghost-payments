import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

    heroIsFullHeight: {
        flex: 1,
        backgroundColor: 'black',
    },

    heroCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },

    LogInSignUpLogo: {
        height: 110,
        width: 110,
        marginBottom: 30
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
        paddingBottom: 15
    },

    logInButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },

    moveDown: {
        marginTop: 15
    }

});

export default globalStyles;