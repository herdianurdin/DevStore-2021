import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import dimension from '../../assets/dimension'
import colors from '../../assets/colors'

const Detail = ({ navigation, route }) => {
    const { item } = route.params
    const [menu, setMenu] = useState(0)
    const specification = (item) => {
        const result = []
        let i = 0

        for (const [key, value] of Object.entries(item.specification)) {
            result.push(
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderColor: colors.muted,
                        paddingBottom: dimension.size4,
                        marginBottom: dimension.size8,
                    }}
                    key={i}
                >
                    <Text style={[styles.contentText, { color: colors.dark, fontFamily: 'medium' }]}>{key}</Text>
                    <Text style={[styles.contentText, { color: colors.dark, fontFamily: 'regular' }]}>{value}</Text>
                </View>
            )

            i++
        }

        return result
    }

    const getStore = (storeId) => {
        navigation.navigate('Store', {
            storeId,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <ScrollView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="chevron-left" size={dimension.size32} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerChatButton}>
                        <Text
                            style={{
                                fontSize: dimension.size16,
                                color: colors.primary,
                                marginRight: dimension.size6,
                                fontFamily: 'medium',
                            }}
                        >
                            Ask Seller
                        </Text>
                        <Feather name="message-square" size={dimension.size16} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.imageContentWrapper}>
                        <Text
                            style={{ fontSize: dimension.size28, color: colors.dark, fontFamily: 'medium' }}
                            numberOfLines={1}
                        >
                            {item.model}
                        </Text>
                        <Text
                            style={{ fontSize: dimension.size16, color: colors.muted, fontFamily: 'regular' }}
                            numberOfLines={1}
                        >
                            Type : {item.type}
                        </Text>
                    </View>
                </View>
                <View style={styles.mainWrapper}>
                    <View style={styles.officialStoreWrapper}>
                        <Image
                            source={{ uri: item.storeLogo }}
                            style={{
                                width: dimension.size64,
                                height: dimension.size64,
                                borderRadius: dimension.size16,
                                marginRight: dimension.size16,
                            }}
                        />
                        <View>
                            <Text
                                style={{
                                    fontSize: dimension.size18,
                                    fontFamily: 'medium',
                                    color: colors.dark,
                                    width: dimension.width / 2 - dimension.size32,
                                }}
                                numberOfLines={1}
                            >
                                {item.storeName}
                            </Text>
                            <Text style={{ fontSize: dimension.size12, fontFamily: 'medium', color: colors.muted }}>
                                view store
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{ position: 'absolute', right: dimension.size24 }}
                            onPress={() => getStore(item.storeId)}
                        >
                            <Feather
                                name="chevron-right"
                                size={32}
                                color={colors.primary}
                                style={{ padding: 4, backgroundColor: colors.white, borderRadius: dimension.size60 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuWrapper}>
                        <TouchableOpacity onPress={() => setMenu(0)}>
                            <Text style={[styles.buttonMenu, menu == 0 ? styles.active : styles.inActive]}>
                                Description
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setMenu(1)}>
                            <Text style={[styles.buttonMenu, menu == 1 ? styles.active : styles.inActive]}>
                                Specification
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setMenu(2)}>
                            <Text style={[styles.buttonMenu, menu == 2 ? styles.active : styles.inActive]}>Review</Text>
                        </TouchableOpacity>
                    </View>
                    {menu == 0 ? (
                        <View style={styles.contentWrapper}>
                            <Text style={[styles.contentText, { color: colors.muted }]}>{item.description}</Text>
                        </View>
                    ) : menu == 1 ? (
                        <View style={styles.contentWrapper}>{specification(item).map((a) => a)}</View>
                    ) : (
                        <View style={styles.contentWrapper}>
                            <Text style={[styles.contentText, { color: colors.muted }]}>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum. It is a long
                                established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum It is a long established fact that
                                a reader will be distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum{' '}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
            <View style={styles.footerWrapper}>
                <View>
                    <Text style={{ fontSize: dimension.size14, fontFamily: 'regular', color: colors.muted }}>
                        Price
                    </Text>
                    <Text style={{ fontSize: dimension.size18, fontFamily: 'medium', color: colors.primary }}>
                        ${item.price}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text
                        style={{
                            paddingHorizontal: dimension.size40,
                            paddingVertical: dimension.size10,
                            backgroundColor: colors.primary,
                            color: colors.white,
                            borderRadius: dimension.size40,
                            fontSize: dimension.size16,
                            fontFamily: 'medium',
                        }}
                    >
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Detail
