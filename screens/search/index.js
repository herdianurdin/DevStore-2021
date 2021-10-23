import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, TextInput, Text, StatusBar, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../../assets/colors'
import dimension from '../../assets/dimension'
import Card from '../../components/card'

const Search = ({ navigation, route }) => {
    const { data } = route.params
    const [filterData, setFilterData] = useState([])
    const [serach, setSearch] = useState('')

    const getDetail = (item) => {
        navigation.navigate('Detail', {
            item,
        })
    }

    const serachFilter = (text) => {
        if (!text) {
            setFilterData([])
        } else {
            const newData = data.filter((item) => {
                return item.model.toLowerCase().indexOf(text.toLowerCase()) > -1
            })

            setFilterData(newData)
        }

        setSearch(text)
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
        <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
            <StatusBar hidden />
            <ScrollView>
                <View style={{ padding: dimension.size32, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', left: dimension.size32 }}>
                        <Feather
                            name="chevron-left"
                            size={dimension.size32}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: dimension.size24,
                            color: colors.dark,
                            fontFamily: 'medium',
                            alignSelf: 'center',
                        }}
                    >
                        Search Products
                    </Text>
                </View>
                <View
                    style={{
                        paddingHorizontal: dimension.size32,
                        justifyContent: 'center',
                        marginBottom: dimension.size18,
                    }}
                >
                    <TextInput
                        placeholder="Seach laptop..."
                        style={{
                            height: dimension.size48,
                            borderRadius: dimension.size48,
                            backgroundColor: colors.grey,
                            paddingLeft: dimension.size24,
                            paddingRight: dimension.size64,
                            fontSize: dimension.size16,
                            color: colors.muted,
                            fontFamily: 'regular',
                        }}
                        value={serach}
                        onChangeText={(text) => serachFilter(text)}
                    />
                    <Feather
                        name="search"
                        size={dimension.size24}
                        color={colors.muted}
                        style={{ position: 'absolute', right: dimension.size64 }}
                    />
                </View>
                <View style={{ paddingHorizontal: dimension.size32, marginBottom: dimension.size24 }}>
                    <Text style={{ fontSize: dimension.size14, color: colors.muted, fontFamily: 'regular' }}>
                        {filterData.length > 0 ? `${filterData.length} Laptop Product Found` : ''}
                    </Text>
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
                    {filterData.map((item, index) => renderProducts(item, index))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search
