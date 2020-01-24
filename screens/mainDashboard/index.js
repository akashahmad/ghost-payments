import {View, StyleSheet, Text, ScrollView, Image} from "react-native";
import React from "react";
import GhostHeaderLogo from '../../assets/img/ghost-header.png';
import ProfileAvatar from '../../assets/img/profile-avatar.png';

function Dashboard() {
    return (
        <View style={styles.homeViewsss}>
            <ScrollView>
                <View style={styles.profileAvatarCenter}>
                    <Image 
                        source={ProfileAvatar}
                        style={styles.profileAvatarDimensions}
                    >
                    </Image>
                </View>
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
