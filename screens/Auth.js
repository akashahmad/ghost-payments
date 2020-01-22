import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/global';
import LogSignImageLogo from '../assets/img/log-sign-logo.png';

const Auth: () => React$Node = () => {
	return (
    	<View style={globalStyles.heroIsFullHeight}>
      		<StatusBar barStyle="light-content" />
			<SafeAreaView>
				<ScrollView>
					<View style={globalStyles.heroCenter} >
						<View>	
							<Image 
								source={LogSignImageLogo}
								style={globalStyles.LogInSignUpLogo} 
							/>
						</View>
						<View>
							<TouchableOpacity 
								style={globalStyles.logInButton}
								onPress={() => navigate('LogIn')}
							>
								<Text style={globalStyles.logInButtonText}>LOG IN</Text>
							</TouchableOpacity>
						</View>
						<View style={globalStyles.moveDown}>
							<TouchableOpacity style={globalStyles.logInButtons}>
								<Text style={globalStyles.logInButtonText}>SIGN UP</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
  	);
};

export default Auth;