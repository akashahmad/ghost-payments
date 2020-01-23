import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../styles/global';
import LogSignImageLogo from '../assets/img/log-sign-logo.png';

function Auth() {
    return (
		<View style={globalStyles.newHero}>
			<Image 
				source={LogSignImageLogo}
				style={globalStyles.LogInSignUpLogo} 
			/>	
			<TouchableOpacity style={globalStyles.logInButton}>
				<Text style={globalStyles.logInButtonText}>LOG IN</Text>
			</TouchableOpacity>	
			<TouchableOpacity style={globalStyles.logInButtons}>
				<Text style={globalStyles.logInButtonText}>SIGN UP</Text>
			</TouchableOpacity>	
		</View>	
	)
}

export default Auth;
