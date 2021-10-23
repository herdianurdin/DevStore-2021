import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerWrapper: {
        marginTop: dimension.size28,
        marginBottom: dimension.size24,
        paddingHorizontal: dimension.size32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    promoWrapper: {
        width: '100%',
        paddingHorizontal: dimension.size32,
        marginBottom: dimension.size18,
    },
    promo: {
        width: '100%',
        height: dimension.size180,
        backgroundColor: colors.primary,
        borderRadius: dimension.size16,
        justifyContent: 'center',
    },
    promoImage: {
        width: dimension.size180,
        height: dimension.size180,
        position: 'absolute',
        right: 0,
    },
    promoTextWrapper: {
        marginTop: -dimension.size32,
        marginLeft: dimension.size24,
    },
    promoSubTitle: {
        color: colors.muted,
        fontSize: dimension.size14,
        fontFamily: 'regular',
    },
    promoTitle: {
        color: colors.white,
        fontSize: dimension.size20,
        fontFamily: 'medium',
    },
    brandWrapper: {
        width: '100%',
        paddingLeft: dimension.size32,
        marginBottom: dimension.size28,
    },
    productsWrapper: {
        width: '100%',
        marginBottom: dimension.size10,
    },
    productsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: dimension.size18,
        paddingHorizontal: dimension.size32,
    },
    productsHeaderTitle: {
        fontSize: dimension.size20,
        fontFamily: 'medium',
    },
    productsTextButton: {
        fontSize: dimension.size16,
        color: colors.muted,
        fontFamily: 'regular',
    },
    popularProductsWrapper: {
        width: '100%',
        paddingLeft: dimension.size32,
    },
})

export default styles
