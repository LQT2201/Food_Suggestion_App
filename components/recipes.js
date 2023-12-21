import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../constants/index'

export default function Recipes({ meals }) {
    return (
        <View>
            <Text>Recipes</Text>
            <View>

                <MasonryList
                    data={meals}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    )
}

const RecipeCard = ({ item, index }) => {
    return (
        <View>
            <TouchableOpacity>
                <View>
                    <Image
                        style={{ width: '100%', height: 100, padding: 10, backgroundColor: '#bebebe', }}
                        source={{ uri: item.strMealThumb }}
                    />
                </View>
                <Text>{item.strMeal}</Text>
            </TouchableOpacity>
        </View>
    )

}