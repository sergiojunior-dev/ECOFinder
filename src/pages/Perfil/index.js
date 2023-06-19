import React from "react";
import {Text, StyleSheet} from 'react-native';
import { ContainerPerfil, InputNome, InputEmail, InputSenha, InputNascimento, InputNacionalidade, BotãoSalvar, ContainerLogoPerfil } from "./style";
import { TextoMinhaLogo, ImagemLogo } from '../../styles/style-Logo';
export default function Perfil ({navigation}){
    return (

        <ContainerPerfil>
            <ContainerLogoPerfil >
                <ImagemLogo source={require('../../assets/Customer.png')}></ImagemLogo>
                <TextoMinhaLogo>ECOFinder</TextoMinhaLogo>
                <ImagemLogo source={require('../../assets/Lixeira.png')}></ImagemLogo>
            </ContainerLogoPerfil>
            <Text style={style.texto}>NOME</Text>
            <InputNome
                placeholder = 'Nome'
            ></InputNome>

            <Text style={style.texto}>EMAIL</Text>
            <InputEmail
                placeholder = 'E-mail'
            >
            </InputEmail>

            <Text style={style.texto}>SENHA</Text>
            <InputSenha
                placeholder='Senha'
                secureTextEntry={true}
            ></InputSenha>

            <Text style={style.texto}>DATA DE NASCIMENTO</Text>
            <InputNascimento
                placeholder='20/01/1997'
            ></InputNascimento>

            <Text style={style.texto}>PAIS/ESTADO</Text>
            <InputNacionalidade
                placeholder='BRAZIL / RIO DE JANEIRO'
            ></InputNacionalidade>

            <BotãoSalvar>
                <Text style={style.textoSalvar}>SALVAR MUDANCAS</Text>
            </BotãoSalvar>
        </ContainerPerfil>
    
    )
};

const style = StyleSheet.create({
    texto: {
        marginTop: 20,
        fontSize: 25,
        fontFamily: "CuteFont_400Regular",
    },
    textoSalvar: {
        fontSize: 25,
        fontFamily: "CuteFont_400Regular",
    }
});