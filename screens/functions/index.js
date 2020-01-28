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

export const distinct = (array, key) => {
    let flags = [], output = [], l = array.length, i;
    for (i = 0; i < l; i++) {
        if (flags[array[i][key]] + "" !== "undefined") {
            output[flags[array[i][key]]] = array[i];
            continue;
        }
        output.push(array[i]);
        flags[array[i][key]] = output.length - 1;
    }
    return output
};