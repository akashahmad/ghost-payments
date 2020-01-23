import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer();
    };

    signOut = () => {
        let {dispatch} = this.props;
        dispatch({type: "SET_LOGGEDIN", payload: false})
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.logoImageContainer}>
                        <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                            <Image
                                source={require("../../../assets/img/log-sign-logo.png")}
                                style={styles.logoImage}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.navSectionStyle}>
                        <TouchableOpacity onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.navItemStyle}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.navigateToScreen('Login')}>
                            <Text style={styles.navItemStyle}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.signOut()}>
                            <Text style={styles.navItemStyle}>SIGN OUT</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
    navItemStyle: {
        padding: 10,
        fontSize: 18,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: "#E2E2E2",
        borderBottomWidth: 1,
        minWidth: 150,
        textAlign: "center",
        color: "#ffffff"

    },
    navSectionStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 39
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    logoImageContainer: {
        paddingTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoImage: {
        backgroundColor: "transparent",
        width: 100,
        height: 100
    },

})

export default SideMenu;