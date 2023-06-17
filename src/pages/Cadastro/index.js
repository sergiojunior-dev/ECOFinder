import React from "react";
import { Text, StyleSheet} from "react-native";
import { ContainerCadastro, InputNome, InputEmail, InputSenha, BotãoCadastrar } from "./style";
import { ContainerLogo, TextoMinhaLogo, ImagemLogo } from '../../styles/style-Logo'
export default function Cadastro(){
    return (
        <ContainerCadastro>
            <ContainerLogo>
                <TextoMinhaLogo>ECOFinder</TextoMinhaLogo>
                <ImagemLogo source={require('../../assets/Lixeira.png')}></ImagemLogo>
            </ContainerLogo>

            <Text style={style.inputTexto}>Digite seu nome</Text>
            <InputNome
                placeholder = 'Nome'
            ></InputNome>

            <Text>Digite seu e-mail</Text>
            <InputEmail
                placeholder = 'E-mail'
            >
            </InputEmail>

            <Text>Digite sua senha</Text>
            <InputSenha
                placeholder='Senha'
                secureTextEntry={true}
            ></InputSenha>

            <BotãoCadastrar>
                <Text>CADASTRAR</Text>
            </BotãoCadastrar>

        </ContainerCadastro>
           
    )
};

const style = StyleSheet.create({
    inputTexto: {
        marginTop: 50,
    },
})