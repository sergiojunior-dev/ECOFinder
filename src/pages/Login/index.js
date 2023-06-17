import React from 'react';
import MeuInput from '../../components/Inputs/index';
import Button from '../../components/Button/index';
import MeusBotões from '../../components/Buttoncadastrar/index';
import { TextoMinhaLogo, ContainerLogo, ImagemLogo } from '../../styles/style-Logo';

import { Container, Titulo1, Titulo2, Acesse, ContainerImagens, Google, Facebook} from './style';

export default function Login({ navigation }) {
 
    const Acessar = () => {
        
        navigation.navigate('Home');
    }

    const Cadastrar = () => {
        
        navigation.navigate('Cadastro');
    }


    return (
        
        <Container>
            <ContainerLogo>
                <TextoMinhaLogo >ECOFinder</TextoMinhaLogo>
                <ImagemLogo source={require('../../assets/Lixeira.png')}></ImagemLogo>
            </ContainerLogo>
                
            <Titulo1>Acesse</Titulo1>
            <Titulo2>Com o e-mail e senha para entrar</Titulo2>
            
            <MeuInput
                    label="Digite seu e-mail"
                    placeHolder="E-mail"
                    comMascara={false}
            ></MeuInput>

            <MeuInput
                    label="Digite sua senha"
                    placeHolder="Senha"
                    comMascara={true}
            ></MeuInput>
            
            <Button />
            
            <MeusBotões
                acao={Acessar}
                cadastrar = {Cadastrar}
            ></MeusBotões>
            
            <Acesse>Ou acesse com</Acesse>
            
            <ContainerImagens>
                <Google source={require('../../assets/Google.png')}></Google>
                <Facebook source={require('../../assets/Facebook.png')}></Facebook>
            </ContainerImagens>

            
            </Container>
        );
    }
