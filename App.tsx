import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ActivityIndicator, View } from 'react-native';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loading, setLoading] = useState(false);

 function starLoading(){
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <> 
    {loading ? (
      <View style={{flex:1, backgroundColor: '#71c5cf', justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator 
      size={'large'}
      color={'#FFF'}
      />
      </View>
    ):       
    <Home />     
    }
    <StatusBar style="auto" hidden/>   
     </>
  );
}


