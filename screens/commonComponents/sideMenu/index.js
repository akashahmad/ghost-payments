import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NavLogoIcon from '../../../assets/img/nav-icon-logo.png';
import Coffee from '../../../assets/img/coffee.png';
import Card from '../../../assets/img/card.png';
import LogoutIcon from '../../../assets/img/logout-icon.png';
import firebase from "../../../utils/firebase";

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer();
    };

    signOut = () => {
        let { dispatch, id } = this.props;
        firebase.auth().signOut();
        let backupId = "";
        if(!backupId){
            backupId=id;
        }
        dispatch({
            type: "SET_USER",
            payload: null
        });
        dispatch({
            type: "SET_ID",
            payload: null
        });
        dispatch({
            type: "SET_LOGGEDIN",
            payload: false
        });
        firebase.database().ref('/geolocs/' + backupId).remove().then(removed => {
        }).catch(er=>{
            console.log("err", er);
        });
        firebase.database()
            .ref('/usersMetadata/' + backupId)
            .off()
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.logoImageContainer}>
                        <Image
                            source={NavLogoIcon}
                            style={styles.logoImage}
                        />
                    </View>
                    <View style={styles.navSectionStyle}>
                        <TouchableOpacity onPress={this.navigateToScreen('Coffee')} style={styles.navRowFlex}>
                            <Image
                                source={Coffee}
                                style={styles.coffeeImage}
                            />
                            <Text style={styles.navItemStyle}>Favorite Coffee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.navigateToScreen('Payment')} style={styles.navRowFlexss}>
                            <Image
                                source={Card}
                                style={styles.coffeeImage}
                            />
                            <Text style={styles.navItemStyle}>Payment Method</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.signOut()} style={styles.navRowFlexss}>
                            <Image
                                source={LogoutIcon}
                                style={styles.coffeeImage}
                            />
                            <Text style={styles.navItemStyle}>Logout</Text>
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

    navRowFlexss: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -20
    },

    coffeeImage: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 33
    },

    navRowFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    container: {
        paddingTop: 20,
        flex: 1,
    },
    navItemStyle: {
        padding: 10,
        fontSize: 15,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: "#E2E2E2",
        borderBottomWidth: 1,
        minWidth: 150,
        // textAlign: "center",
        color: "#ffffff",
        fontWeight: '600'

    },
    navSectionStyle: {
        display: "flex",
        alignItems: "center",
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
        resizeMode: 'contain',
        height: 25,
        marginRight: 20
    },

})

export default SideMenu;