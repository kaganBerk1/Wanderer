
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import AppLoading from 'expo-app-loading';
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';
import About from './pages/About';
import SingleList from './pages/SingleList';

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
        name="About" 
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#313131',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }} 
        component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


