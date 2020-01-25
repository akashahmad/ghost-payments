import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React, {useState, useEffect} from "react";
import ProfileAvatar from '../../assets/img/profile-avatar.png';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import firebase from "../../utils/firebase";


function Dashboard(props) {
    let {user: propUser, id} = props;
    const [user, setUser] = useState(propUser);
    const chooseImage = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                update(response);
            }
        });
    };

    const update = (response) => {
        ImageResizer.createResizedImage((Platform.OS === "ios" ? response.uri : response.path), 1000, 700, 'JPEG', 50).then((response) => {
            const storage = firebase.storage();
            const imageRef = storage.ref('profiles').child(id);
            let data = imageRef.putFile(response.uri);
            let updateUser = {...user};
            updateUser.photoURL = "loader";
            setUser({...updateUser});
            data.on('state_changed', function (snapshot) {

            });
            return data;
        }).then(res => {
            let updateUser = {...user};
            updateUser.photoURL = res.downloadURL;
            setUser({...updateUser});
            firebase.database().ref("/users/" + id + "/photoURL").set(res.downloadURL);
        }).catch((err) => {
            console.log("err", err);
        });
    };
    return (
        <View style={styles.homeViewsss}>
            <ScrollView>
                {<View style={styles.profileAvatarCenter}>
                    <TouchableOpacity
                        style={styles.accessButton}
                        onPress={() => chooseImage()}>
                        <Image
                            source={user.photoURL ? ({uri: user.photoURL}) : ProfileAvatar}
                            style={styles.profileAvatarDimensions}>
                        </Image>
                    </TouchableOpacity>
                </View>}
                <View style={styles.transactionColumn}>
                    <Text style={styles.transactionText}>
                        Transactions
                    </Text>
                </View>
                <View style={styles.merchantNameColumn}>
                    <Text style={styles.merchantNameText}>
                        Mission Coffee Shop
                    </Text>
                </View>
                <View style={styles.descriptionPriceFlex}>
                    <Text style={styles.descriptionText}>
                        Grande Black Coffee
                    </Text>
                    <Text style={styles.priceText}>
                        $5.99
                    </Text>
                </View>
                <View style={styles.merchantNameColumn}>
                    <Text style={styles.merchantNameText}>
                        Mission Coffee Shop
                    </Text>
                </View>
                <View style={styles.descriptionPriceFlex}>
                    <Text style={styles.descriptionText}>
                        Grande Black Coffee
                    </Text>
                    <Text style={styles.priceText}>
                        $5.99
                    </Text>
                </View>
                <View style={styles.merchantNameColumn}>
                    <Text style={styles.merchantNameText}>
                        Mission Coffee Shop
                    </Text>
                </View>
                <View style={styles.descriptionPriceFlex}>
                    <Text style={styles.descriptionText}>
                        Grande Black Coffee
                    </Text>
                    <Text style={styles.priceText}>
                        $5.99
                    </Text>
                </View>
                <View style={styles.merchantNameColumn}>
                    <Text style={styles.merchantNameText}>
                        Mission Coffee Shop
                    </Text>
                </View>
                <View style={styles.descriptionPriceFlex}>
                    <Text style={styles.descriptionText}>
                        Grande Black Coffee
                    </Text>
                    <Text style={styles.priceText}>
                        $5.99
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({

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
        fontWeight: '700',
        fontSize: 15,
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
