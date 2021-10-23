import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    buttonMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: dimension.size8,
        borderColor: colors.grey,
        borderBottomWidth: 1,
        paddingVertical: dimension.size16
    }
})

export default styles
