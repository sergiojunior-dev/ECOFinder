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
        height: 50,
        width: 320,
        fontSize: 30,
        color: "#fff",
        borderRadius: 4,
        backgroundColor: "#77CAAF",
        borderColor: "#77CAAF",
        fontFamily: "CuteFont_400Regular",
        
    },
    texto: {
        fontSize: 35,
        marginTop: 36,
        fontFamily: "CuteFont_400Regular",
},
});

export default MeuInput;