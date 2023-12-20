
import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 21522461 -- Nguyễn Văn Phong

const SignupView = ({ navigation }) => {
    const gotoLogin = () => {
        navigation.replace('Login');
    }
    return (
        <SafeAreaView style={styles.signup_view}>
            <View style={{ padding: 30, alignItems: 'center' }}>
                <Image style={styles.icon_logo} source={require('../assets/react-native-icon.png')}></Image>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Create New Account</Text>
            </View>
            <View>
                <View style={styles.signup_infor}>
                    <Ionicons name="person-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput placeholder='Enter username' style={{ marginLeft: 10 }} ></TextInput>
                </View>
                <View style={styles.signup_infor}>
                    <Ionicons name="mail-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput placeholder='Enter email' style={{ marginLeft: 10 }} ></TextInput>
                </View>
                <View style={styles.signup_infor}>
                    <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput placeholder='Enter password' secureTextEntry={true} style={{ marginLeft: 10 }} ></TextInput>
                </View>
                <View style={styles.signup_infor}>
                    <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput placeholder='Confirm password' secureTextEntry={true} style={{ marginLeft: 10 }} ></TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button_signup}>
                    <Text style={styles.button_signup_content}
                    >Create</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Already have an account? </Text>
                    <Text
                        onPress={gotoLogin}
                        style={{ color: 'blue', fontWeight: 'bold', fontSize: 16, }}
                    >Login now!</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    signup_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon_logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    signup_infor: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button_signup: {
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'transparent',
    },
    button_signup_content: {
        color: 'white',
        textTransform: 'uppercase',
        width: 200,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default SignupView;