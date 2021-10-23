import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Feather, AntDesign, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'
import styles from './styles'
import firebase from 'firebase'

const Account = ({ navigation }) => {
    const user = firebase?.auth()?.currentUser
    const name = user.displayName

    const signOut = () => {
        firebase.auth().signOut()

        navigation.goBack()
        navigation.replace('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        paddingVertical: dimension.size18,
                        borderBottomColor: colors.grey,
                        borderBottomWidth: 1,
                        width: dimension.width - dimension.size42,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={require('../../assets/images/logo.webp')}
                        style={{ width: dimension.size120, height: dimension.size60 }}
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: dimension.size16 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="x" size={dimension.size32} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingVertical: dimension.size18,
                        borderBottomColor: colors.grey,
                        borderBottomWidth: 1,
                        width: dimension.width - dimension.size42,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Entypo
                        name="user"
                        size={dimension.size32}
                        color={colors.primary}
                        style={{
                            backgroundColor: colors.grey,
                            padding: dimension.size12,
                            borderRadius: dimension.size40,
                            marginHorizontal: dimension.size16,
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: dimension.size16, color: colors.muted, fontFamily: 'regular' }}>
                            Welcome
                        </Text>
                        <Text style={{ fontSize: dimension.size18, color: colors.dark, fontFamily: 'medium' }}>
                            {name}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: dimension.width,
                        paddingHorizontal: dimension.size32,
                        paddingVertical: dimension.size16,
                        marginBottom: dimension.size16,
                    }}
                >
                    <TouchableOpacity style={styles.buttonMenu}>
                        <AntDesign
                            name="swap"
                            size={dimension.size24}
                            color={colors.primary}
                            style={{ marginRight: dimension.size16 }}
                        />
                        <Text style={{ fontSize: dimension.size18, fontFamily: 'medium' }}>Transactions</Text>
                        <Feather
                            name="chevron-right"
                            size={dimension.size28}
                            color={colors.primary}
                            style={{
                                position: 'absolute',
                                right: 0,
                                backgroundColor: colors.grey,
                                padding: dimension.size4,
                                borderRadius: dimension.size32,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Entypo
                            name="wallet"
                            size={dimension.size24}
                            color={colors.primary}
                            style={{ marginRight: dimension.size16 }}
                        />
                        <Text style={{ fontSize: dimension.size18, fontFamily: 'medium' }}>Payment Method</Text>
                        <Feather
                            name="chevron-right"
                            size={dimension.size28}
                            color={colors.primary}
                            style={{
                                position: 'absolute',
                                right: 0,
                                backgroundColor: colors.grey,
                                padding: dimension.size4,
                                borderRadius: dimension.size32,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <MaterialCommunityIcons
                            name="account"
                            size={dimension.size24}
                            color={colors.primary}
                            style={{ marginRight: dimension.size16 }}
                        />
                        <Text style={{ fontSize: dimension.size18, fontFamily: 'medium' }}>Profile</Text>
                        <Feather
                            name="chevron-right"
                            size={dimension.size28}
                            color={colors.primary}
                            style={{
                                position: 'absolute',
                                right: 0,
                                backgroundColor: colors.grey,
                                padding: dimension.size4,
                                borderRadius: dimension.size32,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMenu}>
                        <Ionicons
                            name="settings"
                            size={dimension.size24}
                            color={colors.primary}
                            style={{ marginRight: dimension.size16 }}
                        />
                        <Text style={{ fontSize: dimension.size18, fontFamily: 'medium' }}>Settings</Text>
                        <Feather
                            name="chevron-right"
                            size={dimension.size28}
                            color={colors.primary}
                            style={{
                                position: 'absolute',
                                right: 0,
                                backgroundColor: colors.grey,
                                padding: dimension.size4,
                                borderRadius: dimension.size32,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={signOut}>
                    <Text
                        style={{
                            fontSize: dimension.size20,
                            color: colors.white,
                            backgroundColor: colors.primary,
                            paddingHorizontal: dimension.size80,
                            paddingVertical: dimension.size12,
                            borderRadius: dimension.size80,
                            fontFamily: 'medium',
                        }}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Account
