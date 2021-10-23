import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/welcome'
import Login from '../screens/login'
import Register from '../screens/register'
import Account from '../screens/account'
import Home from '../screens/home'
import Search from '../screens/search'
import Detail from '../screens/detail'
import Store from '../screens/store'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
                <Stack.Screen name="Store" component={Store} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
