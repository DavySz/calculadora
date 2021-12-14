import React from 'react';
import { TouchableHighlight, Text, Dimensions, StyleSheet } from 'react-native';


export function Button(props) {
    const stylesButton = [style.Button]
    if (props.double) stylesButton.push(style.doubleButton)
    if (props.triple) stylesButton.push(style.tripleButton)
    if (props.operation) stylesButton.push(style.operationButton)
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.text}</Text>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    Button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#fff',
        borderColor: 'black',
        textAlign: 'center',
        color: 'black',
        borderWidth: 1,
        fontSize: 40,
        padding: 20,
    },
    operationButton: {
        color: 'black',
        backgroundColor: 'orange'
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    tripleButton: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})