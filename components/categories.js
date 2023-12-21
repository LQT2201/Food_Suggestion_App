import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput,Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';



export default function Categories({categories, activeCateogry, setActiveCategory} ) {
        
    return(
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator= {false}
            contentContainerStyle= {{paddingHorizontal:15}}>
            {
                categories.map((cat,index) => {

                    return(
                        <TouchableOpacity
                        // onPress={()=>setActiveCategory(cat.name)}
                        style={styles.category_container}
                        key={index}>
                            <View>
                                <Image
                                source={{ uri: cat.strCategoryThumb }} 
                                style={styles.category_image}/>
                            </View>
                            <Text style={styles.category_name}>
                                {cat.strCategory}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
        
            </ScrollView>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    category_container: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight:20,
    },
    category_image: {
        width: 60, // Set your desired width
        height: 60,
        borderRadius: 50, 
    },
    category_name: {
        fontSize: 16,
        fontWeight: '600',
    },


});