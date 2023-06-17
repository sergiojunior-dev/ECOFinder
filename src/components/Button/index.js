import React from "react";
import { ContainerButton } from "../../styles/style-button"
import { Esqueci } from "./style";
import { Text, Checkbox, NativeBaseProvider } from "native-base";
export default function Button (props) {

    return (
            <ContainerButton>    
            <NativeBaseProvider>
                <Checkbox>
                    <Text >Lembrar senha</Text>
               </Checkbox>
               
                
            </NativeBaseProvider>
                
            <Esqueci>Esqueci minha senha</Esqueci>

            
            </ContainerButton>
    );
};
 


