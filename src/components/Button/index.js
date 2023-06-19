import React from "react";
import { ContainerButton } from "../../styles/style-button"
import { Esqueci } from "./style";
import {Checkbox, NativeBaseProvider } from "native-base";
export default function Button (props) {

    return (
            <ContainerButton>    
            <NativeBaseProvider>
                <Checkbox>
                    <Esqueci>Lembrar senha</Esqueci>
               </Checkbox>
               
            </NativeBaseProvider>
                
            <Esqueci>Esqueci minha senha</Esqueci>

            </ContainerButton>
    );
};
 


