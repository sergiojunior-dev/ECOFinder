import React from "react";
import { Botoes, Cadastrar, Acessar } from "./style";
import { Text } from "react-native";

export default function MeusBotões (props) {
    return (
        <Botoes>
            <Cadastrar onPress={props.cadastrar}>
                <Text>CADASTRAR</Text>
            </Cadastrar>
            <Acessar onPress={props.acao}>
                <Text>ACESSAR</Text>
            </Acessar>
        </Botoes>
    );
}