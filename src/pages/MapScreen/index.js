import React, { useEffect, useState} from "react";
import { StyleSheet } from "react-native";
import { ContainerMaps, InputMaps, ContainerImagens} from "./style";
import { TextoMinhaLogo, ContainerLogo, ImagemLogo, } from "../../styles/style-Logo"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy, LocationObject } from "expo-location";
import MapView, {Marker} from "react-native-maps";

export default function MapScreen({ navigation }) {
    const [location, setLocation] = useState(LocationObject);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermissions();
        
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response);
        });
        
    }, [])
    
    
    const Home = () => {
        
        navigation.navigate('Home');
    }

    const Perfil = () => {
        
        navigation.navigate('Perfil');
    }


    return (
        <ContainerMaps>
            <ContainerLogo>
                <TextoMinhaLogo>ECOFinder</TextoMinhaLogo>
                <ImagemLogo source={require('../../assets/Lixeira.png')}></ImagemLogo>
            </ContainerLogo>

            <InputMaps placeholder="BUSCAR"></InputMaps>
            {
                location &&
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            }}
                        />
                </MapView>
                    
            }
            <ContainerImagens>
                <MaterialCommunityIcons onPress={Home} name="home" size={50} color="#77CAAF" />
                <MaterialCommunityIcons onPress={Perfil} name="account" size={50} color="#77CAAF" />
            </ContainerImagens>
            
        </ContainerMaps>    
    )
};

const styles = StyleSheet.create({
    map: {
        width: 320,
        height: 500,
    }
});