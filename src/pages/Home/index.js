import React from "react";
import { Text, StyleSheet } from "react-native";
import { ContainerBotoes, Botao1, Botao2, Botao3, Botao4 } from "./style";
import { TextoMinhaLogo, ContainerLogo, ImagemLogo} from "../../styles/style-Logo"

export default function Home({navigation}) {
    const Iniciar = () => {
        
        navigation.navigate('MapScreen');
    }

    return (
        <ContainerBotoes>
            <ContainerLogo>
                <TextoMinhaLogo>ECOFinder</TextoMinhaLogo>
                <ImagemLogo source={require('../../assets/Lixeira.png')}></ImagemLogo>
            </ContainerLogo>

            <Botao1 onPress={Iniciar}>
                <Text style={style.texto}>INICIAR ROTA</Text>
            </Botao1> 
                
            <Botao2>
                <Text  style={style.texto}>LIXEIRAS PROXIMAS</Text>
            </Botao2>
            
            <Botao3>
                <Text style={style.texto}>INDICAR LIXEIRA</Text>
            </Botao3>

            <Botao4>
                <Text style={style.texto}>REPORTAR</Text>
            </Botao4>

        </ContainerBotoes>
    )
};

const style = StyleSheet.create({
    texto: {
        color: '#fff',
        fontSize: 35,
        fontFamily: "CuteFont_400Regular",
    },
})