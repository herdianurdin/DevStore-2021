import React from 'react'
import { SafeAreaView, Image, Text, StatusBar, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}
        >
            <StatusBar hidden />

            <Image
                source={require('../../assets/adaptive-icon.png')}
                style={{ width: dimension.size180, height: dimension.size180 }}
            />
            <Text
                style={{
                    fontSize: dimension.size28,
                    color: colors.white,
                    textAlign: 'center',
                    marginBottom: dimension.size24,
                }}
            >
                {'Find a powerful\nlaptop for you'}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.replace('Login')
                }}
            >
                <Text
                    style={{
                        fontSize: dimension.size24,
                        backgroundColor: colors.white,
                        paddingVertical: dimension.size12,
                        paddingHorizontal: dimension.size32,
                        borderRadius: dimension.size32,
                    }}
                >
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Welcome
