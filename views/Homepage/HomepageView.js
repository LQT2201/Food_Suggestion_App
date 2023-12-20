import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const HomepageView = () => {
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            <Image></Image>
        </ScrollView>
    );
};

export default HomepageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 2,
        marginHorizontal: 12,
    },
});
