import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from '../../components/categories';



const HomepageView = () => {

    const [categories, setCategories] = useState([]);

    useEffect(
        () => {
            getCategories();

        }, [])

    const getCategories = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')

            if (response && response.data) {
                setCategories(response.data.categories);
            }
        } catch (err) {
            console.log('error: ', err.message);
        }
    }

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.title}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                    MAKE YOUR OWN FOOD!!!
                </Text>
            </View>
            <View>

                <Categories categories={categories} />
            </View>
        </ScrollView>

    );
};

export default HomepageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 2,
        marginHorizontal: 12,
        marginTop: 50
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
