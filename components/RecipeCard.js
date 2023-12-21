import React from "react";
import { View,Text,StyleSheet, Pressable,Image} from "react-native";

export default RecipeCard = ({item,index}) => {
    return(
        <View>
            

            <Pressable style={styles.card_pressable}>
                <Image 
                source={{uri: item.image}}
                style = {styles.card_image}>
                </Image>
                <Text>
                    {item.name}
                </Text>
            </Pressable>
           
        </View>
    );
}

const styles = StyleSheet.create({
    card_pressable: {
        display: "flex",
        justifyContent: "space-between",
        width:'100%',
    },
    card_image: {
        width: '100%',
        height: 350,
        borderRadius: 20,
    }
})