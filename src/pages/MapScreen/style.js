import styled from "styled-components/native";

export const ContainerMaps = styled.SafeAreaView`
        margin-top: 10px;
        flex-direction:column;
        align-items:flex-start;
        justify-content: center;
        align-self: center;
`;

export const InputMaps = styled.TextInput`
        border-width: 2px;
        margin-bottom: 10px;
        margin-top: 20px; 
        width: 320px;
        font-size: 25px;
        font-style: italic;
        border-radius: 4px;
        background-color: #77CAAF;
        border-color: #77CAAF;
        color: #fff;
`;

export const ContainerImagens = styled.SafeAreaView`
        flex-direction:row;
        justify-content: space-around;
        align-self:center;
        width:250px;
        margin-top:20px;
`;
export const Home = styled.Image`
        width: 50px;
        height: 50px;
`;
export const Perfil = styled(Home)``;
