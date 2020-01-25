import {View, StyleSheet, Text, ScrollView, Image, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {showMessage} from "react-native-flash-message";
import {CreditCardInput} from "react-native-credit-card-input";
import {deletePopup} from '../functions'
import {apiPath} from '../../config'
import axios from 'axios';
function Payment(props) {
    let {user, dispatch} = props;
    const [valid, setValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [card, setCard] = useState({
        number: "",
        exp_year: "",
        cvc: "",
    });
    const cardValidator = (form) => {
        setErrorMessage(false);
        let monthYear = form.values.expiry ? form.values.expiry : "";
        monthYear ? monthYear = monthYear.split("/") : "";
        let card = {
            number: form.values.number ? form.values.number : "",
            exp_month: monthYear ? monthYear[0] : "",
            exp_year: monthYear ? monthYear[1] : "",
            cvc: form.values.cvc ? form.values.cvc : "",
        }
        setCard(card);
        setValid(form.valid);
    };
    const addPayment = () => {
        let requestedData = {
            card,
            email: user.email,
            user
        };
        console.log("requestedData", JSON.stringify(requestedData));
        if (!valid) {
            setErrorMessage(true)
        }
        else {
            dispatch({
                type: "SET_LOADER",
                payload: true
            });
            axios.post(apiPath + "/addPaymentDetail", requestedData).then(res => {
                dispatch({
                    type: "SET_LOADER",
                    payload: false
                });
                showMessage({
                    message: "Payment Method Successfully Added.",
                    type: "success",
                    backgroundColor: "#28a745",
                    color: "white",
                    icon: "info",
                    duration: 5000
                })
            }).catch(err => {
                dispatch({
                    type: "SET_LOADER",
                    payload: false
                });
                if (err.response && err.response.data && err.response.data.err && err.response.data.err.raw && err.response.data.err.raw.message) {
                    showMessage({
                        message: err.response.data.err.raw.message,
                        type: "danger",
                        backgroundColor: "red",
                        color: "white",
                        icon: "info",
                        duration: 5000
                    })
                }
                console.log(err)
            })
        }
    };

    const removePaymentMehtod = () => {
        let requestedData = {
            user
        };
        dispatch({
            type: "SET_LOADER",
            payload: true
        });
        axios.post(apiPath + "/removePayment", requestedData).then(res => {
            dispatch({
                type: "SET_LOADER",
                payload: false
            });
        }).catch(err => {
            dispatch({
                type: "SET_LOADER",
                payload: false
            });
            if (err.response && err.response.data && err.response.data.err && err.response.data.err.raw && err.response.data.err.raw.message) {
                showMessage({
                    message: err.response.data.err.raw.message,
                    type: "danger",
                    backgroundColor: "red",
                    color: "white",
                    icon: "info",
                    duration: 5000
                })
            }
        })
    };

    const switchBrand = (brand) => {
        switch (brand) {
            case "MasterCard":
                return <Image source={require("../../assets/img/mastercard.jpeg")}
                              style={{width: 32, height: 32, marginTop: 40}}/>;
            case "American Express":
                return <Image source={require("../../assets/img/americanExpress.jpg")}
                              style={{width: 32, height: 32, marginTop: 40}}/>;
            case "Visa":
                return <Image source={require("../../assets/img/visa.jpg")}
                              style={{width: 32, height: 32, marginTop: 40}}/>;
            default:
                return <Text style={styles.orManuallyCreateNText}>{brand}</Text>
        }
    };
    return (
        <View style={styles.homeViewsss}>
            <ScrollView>
                {user && user.source ?
                    <View>
                        <View style={styles.transactionColumn}>
                            <Text style={styles.transactionText}>
                                Credit card
                            </Text>
                        </View>
                        <View style={styles.dFlux}>
                            <View style={styles.dfluxx}>
                                {switchBrand(user.source.brand)}
                                <Text style={styles.orManuallyCreateNText}> &nbsp;
                                    **** &nbsp;{user.source.last4}</Text>
                            </View>
                            <View style={styles.centerButton}>
                                <TouchableOpacity
                                    onPress={() => deletePopup(removePaymentMehtod, "1", "Are you sure you want to remove payment method?")}
                                    style={styles.signButton}>
                                    <Text style={styles.logInButtonTextss}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> : <View>
                        <View style={styles.transactionColumn}>
                            <Text style={styles.transactionText}>
                                Add credit card
                            </Text>
                        </View>
                        <View style={styles.mainCheck}>
                            <CreditCardInput
                                onChange={(form) => cardValidator(form)}
                                invalidColor="red"
                                cardScale={1}
                                inputStyle={{color: "white"}}
                                allowScroll={true}
                            />
                            {errorMessage && <Text style={styles.fieldLabelRequired}>Invalid Card Information</Text>}
                        </View>
                        <View style={styles.centerButton}>
                            <TouchableOpacity
                                onPress={() => addPayment()}
                                style={styles.signButton}>
                                <Text style={styles.logInButtonTextss}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
                {/*<View style={styles.transactionColumn}>*/}
                {/*<Text style={styles.transactionText}>*/}
                {/*Add credit card*/}
                {/*</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.cardNumberTextContainer}>*/}
                {/*<Text style={styles.cardNumberText}>Card Number</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.inputCoffeeContainer}>*/}
                {/*<TextInput placeholder={'Card number'} style={styles.signUpInputFields}/>*/}
                {/*</View>*/}
                {/*<View style={styles.expCodeContainer}>*/}
                {/*<View style={styles.cardNumberTextContainerss}>*/}
                {/*<Text style={styles.cardNumberText}>Exp. Date</Text>*/}
                {/*<TextInput placeholder={'MM/YY'} style={styles.expCodeInputField}/>*/}
                {/*</View>*/}
                {/*<View style={styles.cardNumberTextContainerssss}>*/}
                {/*<Text style={styles.cardNumberText}>CVV</Text>*/}
                {/*<TextInput placeholder={'123'} style={styles.expCodeInputField}/>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*<View style={styles.zipContainer}>*/}
                {/*<Text style={styles.cardNumberText}>Zip Code</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.inputCoffeeContainer}>*/}
                {/*<TextInput placeholder={'Zip code'} style={styles.signUpInputFields}/>*/}
                {/*</View>*/}
                {/*<View style={styles.centerButton}>*/}
                {/*<TouchableOpacity*/}
                {/*style={styles.signButton}>*/}
                {/*<Text style={styles.logInButtonTextss}>SAVE</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
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

    dfluxx: {
        display: "flex",
        flexDirection: "row",
    },
    dFlux: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orManuallyCreateNText: {
        backgroundColor: "transparent",
        color: "rgb(68, 68, 68)",
        // fontFamily: ".AppleSystemUIFont",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "left",
        lineHeight: 30,
        alignSelf: "flex-start",
        paddingTop: 40
    },
    mainCheck: {
        paddingTop: 30,
        width: "100%"
    },
    fieldLabelRequired: {
        color: "red"
    }
});