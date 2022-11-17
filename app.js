
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import AppLoading from 'expo-app-loading';
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';
import SingleList from './pages/SingleList';
import CreateList from './pages/CreateList';
import CreateCont from './pages/CreateCont';
import Login from './pages/Login';

export default function App() {
  const [showHeader,setShowHeader]=useState();
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

  const Stack = createStackNavigator();
 
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
     name="Login"           
     options={{
         title: 'Login',
         headerStyle: {
           backgroundColor: '#5e316b',
         },
         headerTintColor: '#fff',
         headerTitleAlign: 'center',       
       }} 
       component={Login} />
        <Stack.Screen 
        name="Home"           
        options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#5e316b',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerShown:showHeader,
       
          }} 
          component={Home} />
        <Stack.Screen 
        name="SingleList"           
        options={{
            title: 'List',
            headerStyle: {
              backgroundColor: '#5e316b',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerShown:true,
       
          }} 
          component={SingleList} />  
        <Stack.Screen 
        name="Create" 
        options={{
          title: '1/2 Create',
          headerStyle: {
            backgroundColor: '#5e316b',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShown:true,
     
        }} 
        component={CreateList} />
                <Stack.Screen 
        name="CreateCont" 
        options={{
          title: '2/2 Create',
          headerStyle: {
            backgroundColor: '#5e316b',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShown:true,
     
        }} 
        component={CreateCont} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


