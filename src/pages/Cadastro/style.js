import styled from "styled-components/native";

export const ContainerCadastro = styled.SafeAreaView`
        margin-top: 50px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-self: center;
`;

export const InputNome = styled.TextInput`
        margin-bottom: 30;
        margin-top: 10; 
        width: 320;
        font-size: 25;
        font-style: italic;
        border-radius: 4;
        background-color: #77CAAF;
        border-color: #77CAAF;
        color: #fff;
`;

export const InputEmail = styled(InputNome)``;
export const InputSenha = styled(InputNome)``;

export const BotãoCadastrar = styled.TouchableOpacity`
        border-width: 2px;
        border-color: #77CAAF;
        width:320px;
        border-radius: 4px;
        height: 40px;
        text-align: center;
        color: red;
        font-weight: bold;
        align-items: center;
        align-self: center;
        justify-content: center;
        background-color: #77CAAF;
        margin-top:30px;
`;
