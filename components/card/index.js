import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'

const imageSize = (dimension.cardWidth / 8) * 6

const Card = (props) => {
    const { item } = props

    return (
        <View>
            <Image
                source={{ uri: item.imageThumbnail }}
                style={{ width: imageSize, height: imageSize, alignSelf: 'center' }}
            />
            <View
                style={{
                    marginHorizontal: dimension.size10,
                    marginBottom: dimension.size8,
                    padding: dimension.size12,
                    backgroundColor: colors.white,
                    height: (dimension.cardWidth / 8) * 4.5,
                    borderRadius: dimension.size16,
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{ fontSize: dimension.size12, color: colors.dark, fontFamily: 'medium' }}
                >
                    {item.model}
                </Text>
                <Text
                    style={{ fontSize: dimension.size10, color: colors.muted, fontFamily: 'regular' }}
                    numberOfLines={1}
                >
                    {item.brand}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        position: 'absolute',
                        bottom: dimension.size10,
                        left: dimension.size10,
                    }}
                >
                    <Text
                        style={{ fontSize: dimension.size14, color: colors.dark, fontFamily: 'medium' }}
                        numberOfLines={1}
                    >
                        ${item.price}
                    </Text>
                    <Feather
                        name="chevron-right"
                        size={dimension.size24}
                        style={{ backgroundColor: colors.grey, borderRadius: 24, padding: 4 }}
                        color={colors.primary}
                    />
                </View>
            </View>
        </View>
    )
}

export default Card
