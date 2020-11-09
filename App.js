import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import Routes from './src/routes';

export default function App() { 

    const [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        useFonts
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    <>
        <StatusBar style="light" />
        <Routes />;
    </>
};

export default App;