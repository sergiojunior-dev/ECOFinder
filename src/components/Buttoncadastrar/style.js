import styled from "styled-components/native";

const Botoes = styled.View`
        flex-direction: row;
        width: 320px;
        margin-top : 40px;
        align-items: center;
        justify-content : space-between;
`;

const Cadastrar = styled.TouchableOpacity`
        border-width: 2px;
        border-color: #77CAAF;
        width:150px;
        border-radius: 4px;
        height: 40px;
        text-align: center;
        color: #77CAAF;
        font-weight: bold;
        justify-content:center;
        align-items: center;

`
const Acessar = styled(Cadastrar)`
    background-color:#77CAAF;
    color: #fff;


`;



export {
    Botoes,
    Cadastrar,
    Acessar
}