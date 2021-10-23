import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: dimension.size32,
        marginBottom: dimension.size12,
        marginHorizontal: dimension.size32,
    },
    headerChatButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.grey,
        paddingHorizontal: dimension.size12,
        paddingVertical: dimension.size6,
        borderRadius: dimension.size40,
    },
    imageWrapper: {
        width: dimension.width,
        height: dimension.width,
    },
    image: {
        width: dimension.width,
        height: dimension.width,
    },
    imageContentWrapper: {
        position: 'absolute',
        top: dimension.size4,
        left: dimension.size32,
        paddingRight: dimension.size64,
    },
    mainWrapper: {
        paddingHorizontal: dimension.size32,
        marginTop: -dimension.size32,
    },
    officialStoreWrapper: {
        backgroundColor: colors.grey,
        width: '100%',
        height: dimension.size80,
        paddingHorizontal: dimension.size8,
        borderRadius: dimension.size16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: dimension.size28,
    },
    menuWrapper: {
        marginBottom: dimension.size24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
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
    contentWrapper: {
        marginBottom: dimension.size32,
    },
    contentText: {
        fontSize: dimension.size14,
        fontFamily: 'regular',
    },
    footerWrapper: {
        width: '100%',
        height: dimension.size72,
        paddingHorizontal: dimension.size32,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default styles
