import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'
import Loading from '../../components/loading'
import firebase from 'firebase'

const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invisible, setInvisible] = useState(true)
    const [pending, setPending] = useState(false)

    const signUp = () => {
        if (!name || !email || !password) {
            alert('Please input your data!')
        } else {
            setPending(true)

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    user.updateProfile({
                        displayName: name,
                    })

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
                    <Text style={styles.title}>Create a new account</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="Name" style={styles.inputText} value={name} onChangeText={setName} />
                    </View>
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
                    <TouchableOpacity onPress={signUp}>
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
                                marginBottom: dimension.size80,
                            }}
                        >
                            Sign up
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: dimension.size16, color: colors.dark, fontFamily: 'regular' }}>
                            Have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.replace('Login')}>
                            <Text style={{ fontSize: dimension.size16, color: colors.primary, fontFamily: 'medium' }}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Register
