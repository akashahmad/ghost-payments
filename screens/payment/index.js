import {View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";
import React from "react";

function Payment() {
    return (
        <View style={styles.homeViewsss}>
            <ScrollView>
                <View style={styles.transactionColumn}>
                    <Text style={styles.transactionText}>
                        Add credit card
                    </Text>
                </View>
                <View style={styles.cardNumberTextContainer}>
                    <Text style={styles.cardNumberText}>Card Number</Text>
                </View>
                <View style={styles.inputCoffeeContainer}>
                    <TextInput placeholder={'Card number'} style={styles.signUpInputFields}/>
                </View>
                <View style={styles.expCodeContainer}>
                    <View style={styles.cardNumberTextContainerss}>
                        <Text style={styles.cardNumberText}>Exp. Date</Text>
                        <TextInput placeholder={'MM/YY'} style={styles.expCodeInputField}/>
                    </View>
                    <View style={styles.cardNumberTextContainerssss}>
                        <Text style={styles.cardNumberText}>CVV</Text>
                        <TextInput placeholder={'123'} style={styles.expCodeInputField}/>
                    </View>
                </View>
                <View style={styles.zipContainer}>
                    <Text style={styles.cardNumberText}>Zip Code</Text>
                </View>
                <View style={styles.inputCoffeeContainer}>
                    <TextInput placeholder={'Zip code'} style={styles.signUpInputFields}/>
                </View>
                <View style={styles.centerButton}>
                    <TouchableOpacity
                                style={styles.signButton}>
                        <Text style={styles.logInButtonTextss}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View> 
    )
}

export default Payment;

const styles = StyleSheet.create({

    zipContainer: {
        marginTop: 15,
        width: '90%',
        marginLeft: '5%'
    },

    expCodeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cardNumberTextContainer: {
        marginTop: 20,
        width: '90%',
        marginLeft: '5%'
    },

    cardNumberTextContainerss: {
        marginTop: 15,
        marginLeft: '5%',
        width: '43%'
    },

    cardNumberTextContainerssss: {
        marginTop: 15,
        marginRight: '5%',
        width: '43%'
    },

    expCodeInputField: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        // width: '90%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 5,
    },

    cardNumberText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    },

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
        marginTop: 5
    },

    signUpInputFieldsss: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        width: '35%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 15,
        marginLeft: '5%'
    },

    signUpInputFieldssss: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        width: '90%',
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: 'white',
        color: 'black',
        marginTop: 5,
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