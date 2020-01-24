import {View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";
import React from "react";

function Dashboard() {
    return (
        <View style={styles.homeViewsss}>
            <ScrollView>
                <View style={styles.transactionColumn}>
                    <Text style={styles.transactionText}>
                        Enter favorite coffee
                    </Text>
                    <Text style={styles.coffeeInfoText}>
                        Coffee shops will see this when you walk in and ask if you want your usual
                    </Text>
                </View>
                <View style={styles.inputCoffeeContainer}>
                    <TextInput placeholder={'What%s your favorite coffee?'} style={styles.signUpInputFields}/>
                </View>
                <View style={styles.centerButton}>
                    <TouchableOpacity
                                style={styles.signButton}>
                        <Text style={styles.logInButtonTextss}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View> 
    )
}

export default Dashboard;

const styles = StyleSheet.create({

    centerButton: {
        marginTop: 0,
        alignItems: 'center'
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

    inputCoffeeContainer: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
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

    coffeeInfoText: {
        fontWeight: '500',
        fontSize: 12,
        color: 'white',
        opacity: .39,
        width: '70%',
        textAlign: 'center',
        marginTop: 12,
        lineHeight: 16
    },

    priceText: {
        fontWeight: '500',
        fontSize: 12,
        color: 'white',
        opacity: .39,
        marginRight: 30
    },

    descriptionText: {
        fontWeight: '500',
        fontSize: 12,
        color: 'white',
        opacity: .39
    },

    descriptionPriceFlex: {
        display: 'flex',
        marginTop: 8,
        marginLeft: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    merchantNameText: {
        fontWeight: '700',
        fontSize: 13,
        color: 'white'
    },

    merchantNameColumn: {
        marginTop: 35,
        marginLeft: 35
    },

    transactionColumn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    transactionText: {
        fontWeight: '600',
        fontSize: 17,
        color: 'white'
    },

    profileAvatarDimensions: {
        height: 100,
        width: 100
    },

    profileAvatarCenter: {
        marginTop: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    homeViewsss: {
        backgroundColor: 'black',
        flex: 1
    },

    homeView: {
        backgroundColor: "black",
        color: "black",
        flex: 1,
    },
});
