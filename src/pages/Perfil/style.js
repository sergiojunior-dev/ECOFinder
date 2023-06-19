import styled from "styled-components/native";

export const ContainerPerfil = styled.SafeAreaView`
        margin-top: 20px;
        flex-direction:column;
        align-items:flex-start;
        justify-content: center;
        align-self: center;

`;
export const ContainerLogoPerfil = styled.SafeAreaView`
        flex-direction:row;
        justify-content:space-between;
        align-items: center;
`;
export const InputNome = styled.TextInput`
        width: 320px;
        font-size: 18px;
        height: 50px;
        background-color: #77CAAF;
        border-color: #77CAAF;
        color: #fff;
`;

export const InputEmail = styled(InputNome)``;
export const InputSenha = styled(InputNome)``;
export const InputNascimento = styled(InputNome)``;
export const InputNacionalidade = styled(InputNome)``;

export const BotãoSalvar = styled.TouchableOpacity`
        border-width: 5px;
        border-color: #77CAAF;
        width:320px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #77CAAF;
        margin-top: 50px;
`;
