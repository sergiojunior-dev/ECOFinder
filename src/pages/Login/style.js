import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
        margin-top: 20px;
        flex-direction:column;
        align-items:flex-start;
        justify-content: center;
        align-self: center;   
`;

export const ContainerTexto = styled.View`
        flex-direction:column;
        width: 40;
        align-items:flex-start;
        justify-content:center;

`;

export const Titulo1 = styled.Text`
        margin-top: 28px;
        font-size: 40px;
        font-style: italic;
        text-align:left;
`;

export const Titulo2 = styled.Text`
        text-align:left;
        font-size: 20px;
        font-style: italic;
`;

export const Acesse = styled.Text`
        margin-top: 20px;
        align-self: center;
`;
export const ContainerImagens = styled.SafeAreaView`
        flex-direction:row;
        justify-content: space-around;
        align-self:center;
        width:150px;
`;
export const Google = styled.Image`
        justify-content: space-around;
        margin-top:30px;
        width:50px;
        height:50px;
`;

export const Facebook = styled(Google)``;