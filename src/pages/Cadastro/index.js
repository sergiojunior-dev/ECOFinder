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
                placeholder='Nome'
                placeholderTextColor={'#fff'}
            ></InputNome>

            <Text style={style.inputTexto}>Digite seu e-mail</Text>
            <InputEmail
                placeholder='E-mail'
                placeholderTextColor={'#fff'}
            >
            </InputEmail>

            <Text style={style.inputTexto}>Digite sua senha</Text>
            <InputSenha
                placeholder='Senha'
                placeholderTextColor={'#fff'}
                secureTextEntry={true}
            ></InputSenha>

            <BotãoCadastrar>
                <Text style={style.textoCadastrar}>CADASTRAR</Text>
            </BotãoCadastrar>

        </ContainerCadastro>
           
    )
};

const style = StyleSheet.create({
    inputTexto: {
        marginTop: 40,
        fontSize: 25,
        fontFamily: "CuteFont_400Regular",
    },
    textoCadastrar: {
        fontSize: 25,
        fontFamily: "CuteFont_400Regular",
        color:'#fff'
        }
})