import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerWrapper: {
        width: dimension.width,
        height: dimension.width,
        padding: dimension.size32,
        marginBottom: dimension.size24,
        backgroundColor: colors.grey,
    },
    headerContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: dimension.size80,
    },
    menuWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: dimension.size32,
        marginBottom: dimension.size32,
    },
    buttonMenu: {
        fontSize: dimension.size14,
        paddingVertical: dimension.size4,
        paddingHorizontal: dimension.size12,
        borderRadius: dimension.size12,
        fontFamily: 'medium',
    },
    active: {
        backgroundColor: colors.primary,
        color: colors.white,
    },
    inActive: {
        backgroundColor: colors.grey,
        color: colors.primary,
    },
})

export default styles
