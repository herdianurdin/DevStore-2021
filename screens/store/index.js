import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'
import Loading from '../../components/loading'
import Card from '../../components/card'

const Store = ({ navigation, route }) => {
    const { storeId } = route.params
    const [pending, setPending] = useState(true)
    const [data, setData] = useState([])
    const [products, setProducts] = useState([])
    const source = axios.CancelToken.source()

    const getData = () => {
        axios
            .get('https://herdaynote.github.io/DevStoreAPI/brand-categories.json', {
                cancelToken: source.token,
            })
            .then((response) => {
                const result = response.data.filter((a) => a.id == storeId)

                setData({
                    id: result[0].id,
                    name: result[0].name,
                    logo: result[0].logo,
                })
                setProducts(result[0].products)

                setPending(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()

        return () => source.cancel()
    }, [])

    const getDetail = (item) => {
        navigation.navigate('Detail', {
            item,
        })
    }

    const renderProducts = (item, index) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={{
                    width: dimension.cardWidth,
                    height: (dimension.cardWidth / 8) * 11,
                    marginRight: index % 2 == 0 ? dimension.size28 : 0,
                    backgroundColor: colors.grey,
                    borderRadius: dimension.size16,
                    marginBottom: dimension.size18,
                }}
                onPress={() => getDetail(item)}
            >
                <Card item={item} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            {pending ? (
                <Loading />
            ) : (
                <ScrollView>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: dimension.size32, left: dimension.size32 }}
                            onPress={() => navigation.goBack()}
                        >
                            <Feather name="chevron-left" size={dimension.size32} color={colors.primary} />
                        </TouchableOpacity>
                        <View style={styles.headerContent}>
                            <Image
                                source={{ uri: data.logo }}
                                style={{
                                    width: dimension.size80,
                                    height: dimension.size80,
                                    borderWidth: 2,
                                    borderColor: colors.white,
                                    borderRadius: dimension.size16,
                                    marginBottom: dimension.size18,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: dimension.size20,
                                    color: colors.dark,
                                    marginBottom: dimension.size12,
                                    fontFamily: 'medium',
                                }}
                            >
                                {data.name}
                            </Text>
                            <View
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: colors.primary,
                                        paddingHorizontal: dimension.size16,
                                        paddingVertical: dimension.size8,
                                        borderRadius: dimension.size16,
                                        margin: dimension.size12,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'medium',
                                            color: colors.white,
                                            marginRight: dimension.size8,
                                        }}
                                    >
                                        Turn on
                                    </Text>
                                    <Feather name="bell" size={dimension.size16} color={colors.white} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: colors.white,
                                        paddingHorizontal: dimension.size16,
                                        paddingVertical: dimension.size8,
                                        borderRadius: dimension.size16,
                                        margin: dimension.size12,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontFamily: 'medium',
                                            color: colors.primary,
                                            marginRight: dimension.size8,
                                        }}
                                    >
                                        Chat
                                    </Text>
                                    <Feather name="message-square" size={dimension.size16} color={colors.primary} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.menuWrapper}>
                        <TouchableOpacity>
                            <Text style={[styles.buttonMenu, styles.active]}>Products</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.buttonMenu, styles.inActive]}>Newest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.buttonMenu, styles.inActive]}>Popular</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.buttonMenu, styles.inActive]}>Category</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            paddingHorizontal: dimension.size32,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        {products.map((item, index) => renderProducts(item, index))}
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default Store
