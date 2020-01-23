import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
import globalStyles from '../../styles/global';
import LogSignImageLogo from '../../assets/img/log-sign-logo.png';

function LogIn() {
    return (
		<SafeAreaView style={styles.signUpView}>
			<Image 
				source={LogSignImageLogo}
				style={globalStyles.LogInSignUpLogoss} 
			/>		
			<TextInput placeholder={'Email address'} style={styles.signUpInputFields}></TextInput>
			<TextInput placeholder={'Password'} style={styles.signUpInputFieldss}></TextInput>
			<TouchableOpacity style={styles.signButton}>
				<Text style={styles.logInButtonTextss}>LOG IN</Text>
			</TouchableOpacity>	
		</SafeAreaView>
	)
}

export default LogIn;

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