import styled from "styled-components/native";

export const ContainerCadastro = styled.SafeAreaView`
        margin-top: 50px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-self: center;
`;

export const InputNome = styled.TextInput`
        margin-top: 10px; 
        width: 320px;
        font-size: 30px;
        background-color: #77CAAF;
        color: #fff;
        font-family: CuteFont_400Regular;
`;

export const InputEmail = styled(InputNome)``;
export const InputSenha = styled(InputNome)``;

export const BotãoCadastrar = styled.TouchableOpacity`
        width:320px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #77CAAF;
        margin-top:60px;
`;
