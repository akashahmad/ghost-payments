import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
import globalStyles from '../styles/global';

const SignUp: () => React$Node = () => {
	return (
    	<View style={globalStyles.heroIsFullHeight}>
      		<StatusBar barStyle="light-content" />
			<SafeAreaView>
				<ScrollView>
					<View style={globalStyles.heroCenter} >
						<View>	
							<Text>Sign Up</Text>
						</View>
                        <View>	
                            <Text>First Name</Text>
                            <TextInput /> 
                            <Text>Last Name</Text>
                            <TextInput /> 
							<Text>Email Address</Text>
                            <TextInput /> 
                            <Text>Password</Text>
                            <TextInput /> 
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

export default SignUp;