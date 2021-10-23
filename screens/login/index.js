import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'
import Loading from '../../components/loading'
import firebase from 'firebase'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invisible, setInvisible] = useState(true)
    const [pending, setPending] = useState(false)

    const signIn = () => {
        if (!email || !password) {
            alert('Please fill email & password!')
        } else {
            setPending(true)

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigation.replace('Home')
                })
                .catch((error) => {
                    setPending(false)
                    alert(error.message)
                })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            {pending ? (
                <Loading />
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/images/logo.webp')} style={styles.logo} />
                    <Text style={styles.title}>Sign in to Continue</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="Email" style={styles.inputText} value={email} onChangeText={setEmail} />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Password"
                            style={styles.inputText}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={invisible}
                        />
                        <TouchableOpacity
                            onPress={() => setInvisible(!invisible)}
                            style={{ position: 'absolute', right: dimension.size64 + dimension.size6 }}
                        >
                            <MaterialCommunityIcons
                                name={invisible ? 'eye' : 'eye-off'}
                                size={dimension.size24}
                                color={colors.muted}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={signIn}>
                        <Text
                            style={{
                                fontSize: dimension.size20,
                                fontFamily: 'medium',
                                backgroundColor: colors.primary,
                                paddingHorizontal: dimension.size56,
                                paddingVertical: dimension.size12,
                                borderRadius: dimension.size56,
                                color: colors.white,
                                marginTop: dimension.size4,
                                marginBottom: dimension.size16,
                            }}
                        >
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: dimension.size16,
                                fontFamily: 'regular',
                                color: colors.muted,
                                marginBottom: dimension.size42,
                            }}
                        >
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: dimension.size16, color: colors.dark, fontFamily: 'regular' }}>
                            Don't have any account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.replace('Register')}>
                            <Text style={{ fontSize: dimension.size16, color: colors.primary, fontFamily: 'medium' }}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Login
