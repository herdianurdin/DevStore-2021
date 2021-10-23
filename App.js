import React from 'react'
import Router from './router'
import { useFonts } from 'expo-font'
import firebase from 'firebase/app'
import firebaseConfig from './config'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const App = () => {
    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/regular.ttf'),
        medium: require('./assets/fonts/medium.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }

    return <Router />
}

export default App
