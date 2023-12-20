import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProductItem from "./ProductItem";

const ProducSection = ({
    productList,
}) => {
    return (
        <View>
            <FlatList
                data={productList}
                renderItem={({ item }) => (
                    <ProductItem
                        product={item}
                    />
                )}
                scrollEnabled={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 12 }}
            />
        </View>
    );
}

export default ProducSection;