import {View, StyleSheet, Text, ScrollView} from "react-native"
import React from "react";

function Dashboard() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <View>
                <Text style={styles.homeView}>Hello World</Text>
            </View>
        </ScrollView>
    </View> 
}

export default Dashboard;

const styles = StyleSheet.create({
    homeView: {
        backgroundColor: "white",
        color: "black",
        flex: 1,
    },
});
