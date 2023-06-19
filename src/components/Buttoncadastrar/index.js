import React from "react";
import { Botoes, Cadastrar, Acessar } from "./style";
import { Text, StyleSheet } from "react-native";

export default function MeusBotões (props) {
    return (
        <Botoes>
            <Cadastrar onPress={props.cadastrar}>
                <Text style={style.TextoBotoes}>CADASTRAR</Text>
            </Cadastrar>
            <Acessar onPress={props.acao}>
                <Text style={style.TextoBotoes}>ACESSAR</Text>
            </Acessar>
        </Botoes>
    )
};

const style = StyleSheet.create({
    TextoBotoes: {
        fontSize: 25,
        fontFamily: "CuteFont_400Regular",
    }
});