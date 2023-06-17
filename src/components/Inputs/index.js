import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text} from 'react-native'

const MeuInput = (props) => {

    return (
        <SafeAreaView>
            <Text style={style.texto}>{props.label}</Text>
            <TextInput
            style={style.input}
            placeholder={props.placeHolder}
            secureTextEntry={props.comMascara}
            ></TextInput>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 2,
        marginTop: 10,
        padding: 10,
        width: 320,
        fontSize: 17,
        color: "#fff",
        borderRadius: 4,
        backgroundColor: "#77CAAF",
        borderColor: "#77CAAF",
        
    },
    texto: {
        fontSize: 20,
        marginTop: 35,

},
});

export default MeuInput;