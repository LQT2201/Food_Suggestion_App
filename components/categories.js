import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Categories({ categories }) {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {
                    categories.map((cat, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.category_item}
                            >
                                <View>
                                    <Image
                                        style={{ width: 50, height: 50, padding: 10, backgroundColor: '#bebebe', borderRadius: 50 }}
                                        source={{ uri: cat.strCategoryThumb }}
                                    />
                                </View>
                                <Text>{cat.strCategory}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Hiển thị các phần tử con theo chiều ngang
        // Căn giữa theo chiều ngang
        backgroundColor: '#f2f2f2',
        paddingVertical: 10, // Thiết lập hiển thị chiều ngang

    },
    category_item: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})