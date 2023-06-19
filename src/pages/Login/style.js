import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
        flex-direction:column;
        align-items:flex-start;
        justify-content: center;
        align-self: center;
        margin:30px;
`;

export const Titulo1 = styled.Text`
        font-size: 60px;
        text-align:left;
        font-family: CuteFont_400Regular;
`;

export const Titulo2 = styled(Titulo1)`
        font-size: 30px;
`;

export const Acesse = styled.Text`
        margin-top: 20px;
        align-self: center;
        font-family: CuteFont_400Regular;
        font-size: 25px;

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