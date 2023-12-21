import React from "react";
import { View,Text,StyleSheet, Pressable,Image} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import RecipeCard from "./RecipeCard";

export default function Recipes (){
     const categoryData = [
        {
            name: 'Starter',
            image: 'https://www.themealdb.com/images/category/starter.png'
        },
        {
            name: 'Beef',
            image: 'https://themealdb.com/images/category/beef.png'
        },
        {
            name: 'Dessert',
            image: 'https://themealdb.com/images/category/dessert.png'
        }
    ]
     const mealData = [
        {
            name: 'Shakshuka',
            image: 'https://www.themealdb.com/images/media/meals/g373701551450225.jpg'
        },
        {
            name: 'Beef Banh Mi Bowls with Sriracha Mayo',
            image: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg'
        },
        {
            name: 'Chickpea Fajitas',
            image: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg'
        },
        {
            name: 'Smoky Lentil Chili with Squash',
            image: 'https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg'
        },
        {
            name: 'Braised Beef Chilli',
            image: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg'
        }
    ]
    return(
        <View>
            <Text style={styles.recipes_header}>
                Công thức
            </Text>
            <View>
                <MasonryList
                data={mealData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item,i}) => <RecipeCard item ={item} index = {i} />}
                // refreshing={isLoadingNext}
                // onRefresh={() => refetch({first: ITEM_CNT})}
                onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    recipes_header: {
        fontSize: 30,
        fontWeight:"500",
    }
})
