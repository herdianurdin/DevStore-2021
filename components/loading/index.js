import React from 'react'
import { ActivityIndicator } from 'react-native'
import colors from '../../assets/colors'

const Loading = () => {
    return <ActivityIndicator size="large" color={colors.primary} style={{width: '100%', height: '100%'}} />
}

export default Loading
