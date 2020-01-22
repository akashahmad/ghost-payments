import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar, Image, Button } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../styles/global';
import { TextInput } from 'react-native-gesture-handler';

const LogIn: () => React$Node = () => {
	return (
    	<View style={globalStyles.heroIsFullHeight}>
      		<StatusBar barStyle="light-content" />
			<SafeAreaView>
				<ScrollView>
					<View style={globalStyles.heroCenter} >
						<View>	
							<Text>Log In</Text>
						</View>
                        <View>	
							<Text>Email Address</Text>
                            <TextInput /> 
                            <Text>Password</Text>
                            <TextInput /> 
						</View>
						<View style={globalStyles.moveDown}>
							<TouchableOpacity style={globalStyles.logInButtons}>
								<Text style={globalStyles.logInButtonText}>LOG IN</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</View>
  	);
};

export default LogIn;