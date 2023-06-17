

import Login from './src/pages/Login/index';
import Home from './src/pages/Home/index';
import MapScreen from './src/pages/MapScreen/index';
import Cadastro from './src/pages/Cadastro/index';
import Perfil from './src/pages/Perfil';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigate = () => {

  return (
  <Stack.Navigator initialRouteName='Login'>

    <Stack.Screen
      name='Login'
      component={Login}
      options={{
        title: ""
      }}
    />

    <Stack.Screen
      name='Home'
      component={Home}
      options={
        {
          title: "",
          }}
      
    />

    <Stack.Screen
      name='MapScreen'
      component={MapScreen}
      options={
        {
          title: "",
        }
      }
    />

    <Stack.Screen
      name='Cadastro'
      component={Cadastro}
      options={
        {
          title: "",
        }
      }
      />
      
      <Stack.Screen
      name='Perfil'
      component={Perfil}
      options={
        {
          title: "",
        }
      }
    />
  </Stack.Navigator>
  );
}

const TabNavigate = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Map" component={MapScreen} /> */}
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate></StackNavigate>
      {/* <TabNavigate></TabNavigate> */}
    </NavigationContainer>
  );
}


