import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    logo: {
        width: dimension.size180,
        height: dimension.size180 / 2,
        marginBottom: dimension.size6,
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        fontFamily: 'medium',
        marginBottom: dimension.size32,
        textAlign: 'center',
        color: colors.dark
    },
    input: {
        width: dimension.width,
        height: dimension.size48,
        paddingHorizontal: dimension.size42,
        marginBottom: dimension.size24,
        justifyContent: 'center'
    },
    inputText: {
        backgroundColor: colors.grey,
        height: '100%',
        borderRadius: dimension.size48,
        paddingLeft: dimension.size28,
        paddingRight: dimension.size64,
        fontSize: 16,
        fontFamily: 'regular',
        color: colors.muted,
    },
})

export default styles
