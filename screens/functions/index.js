import {Alert} from "react-native";

export const deletePopup = (remove, id, message) => {
    Alert.alert(
        'Alert',
        message,
        [
            {
                text: 'DELETE',
                onPress: () => remove(id)
            },
            {
                text: 'CANCEL',
                style: 'cancel',
                onPress: () => () => {
                }
            }
        ],
    );
};