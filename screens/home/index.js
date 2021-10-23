import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, ScrollView, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons'
import colors from '../../assets/colors'
import styles from './styles'
import Card from '../../components/card'
import dimension from '../../assets/dimension'
import Loading from '../../components/loading'
import axios from 'axios'

const Home = ({ navigation }) => {
    const [pending, setPending] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [allBrands, setAllBrands] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    const source = axios.CancelToken.source()

    const getData = () => {
        axios
            .get('https://herdaynote.github.io/DevStoreAPI/brands.json', {
                cancelToken: source.token,
            })
            .then((response) => {
                setAllBrands(response.data)
            })
            .then(() => {
                axios
                    .get('https://herdaynote.github.io/DevStoreAPI/products.json', {
                        cancelToken: source.token,
                    })
                    .then((response) => {
                        const result = response.data

                        setAllProducts(result)
                        setPopularProducts(
                            result
                                .filter((a) => a.count > 0)
                                .sort((a, b) => b.count - a.count)
                                .splice(0, 5)
                        )
                        setPending(false)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
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

    const getStore = (storeId) => {
        navigation.navigate('Store', {
            storeId,
        })
    }

    const renderBrand = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: colors.grey,
                    marginRight: dimension.size32,
                    flexDirection: 'row',
                    height: dimension.size64,
                    alignItems: 'center',
                    padding: dimension.size11,
                    borderRadius: dimension.size16,
                }}
                onPress={() => getStore(item.id)}
            >
                <Image source={{ uri: item.logo }} style={{ width: 42, height: 42, borderRadius: 8, marginRight: 8 }} />
                <View>
                    <Text style={{ fontSize: 14, color: colors.primary, fontFamily: 'medium' }}>{item.brand}</Text>
                    <Text style={{ fontSize: 10, color: colors.muted, fontFamily: 'regular' }}>
                        {allProducts.filter((a) => a.storeId == item.id).length} Products
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderPopularProducts = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    width: dimension.cardWidth,
                    height: (dimension.cardWidth / 8) * 11,
                    marginRight: dimension.size28,
                    backgroundColor: colors.grey,
                    borderRadius: dimension.size16,
                    marginBottom: dimension.size18,
                }}
                onPress={() => getDetail(item)}
            >
                <Card item={item} right={dimension.size28} />
            </TouchableOpacity>
        )
    }

    const renderAllProducts = (item, index) => {
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity
                            style={{ position: 'absolute', left: dimension.size32 }}
                            onPress={() => navigation.navigate('Account')}
                        >
                            <Entypo
                                name="user"
                                size={dimension.size24}
                                color={colors.primary}
                                style={{
                                    padding: dimension.size8,
                                    backgroundColor: colors.grey,
                                    borderRadius: dimension.size32,
                                }}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../assets/images/logo.webp')}
                            style={{ width: dimension.size120, height: dimension.size60 }}
                        />
                        <TouchableOpacity
                            style={{ position: 'absolute', right: dimension.size32 }}
                            onPress={() => navigation.navigate('Search', { data: allProducts })}
                        >
                            <Feather
                                name="search"
                                size={dimension.size24}
                                color={colors.primary}
                                style={{
                                    padding: dimension.size8,
                                    backgroundColor: colors.grey,
                                    borderRadius: dimension.size32,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.promoWrapper}>
                        <View style={styles.promo}>
                            <Image
                                source={require('../../assets/images/zenbook_pro_duo.webp')}
                                style={styles.promoImage}
                            />
                            <View style={styles.promoTextWrapper}>
                                <Text style={styles.promoSubTitle}>Zenbook Pro Duo</Text>
                                <Text style={styles.promoTitle}>{'Unbelievable Visual\n& Performance'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.brandWrapper}>
                        <FlatList
                            data={allBrands}
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            renderItem={renderBrand}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.productsWrapper}>
                        <View style={styles.productsHeader}>
                            <Text style={styles.productsHeaderTitle}>Popular Products</Text>
                            <TouchableOpacity>
                                <Text style={styles.productsTextButton}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.popularProductsWrapper}>
                            <FlatList
                                data={popularProducts}
                                horizontal={true}
                                keyExtractor={(item) => item.id}
                                renderItem={renderPopularProducts}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={styles.productsWrapper}>
                        <View style={styles.productsHeader}>
                            <Text style={styles.productsHeaderTitle}>All Products</Text>
                            <TouchableOpacity>
                                <Text style={styles.productsTextButton}>See All</Text>
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
                            {allProducts.map((item, index) => renderAllProducts(item, index))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default Home
