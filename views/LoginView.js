import React, { useContext, useEffect } from 'react';
import { Button, View, SafeAreaView, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../AuthContext'

//21522461--Nguyễn Văn Phong

const LoginView = ({ navigation }) => {
    const { email, setEmail, password, setPassword, login, isAuthenticated } = useContext(AuthContext);

    const gotoSignup = () => {
        navigation.navigate('Signup');
    }
    const gotoHomepage = () => {
        login();

    }
    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('Homepage');
        }
    }, [isAuthenticated, navigation]);

    return (
        <SafeAreaView style={styles.login_view}>
            <View style={{ padding: 30, alignItems: 'center' }}>
                <Image style={styles.icon_logo} source={require('../assets/react-native-icon.png')}></Image>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Welcome</Text>
            </View>
            <View>
                <View style={styles.login_infor}>
                    <Ionicons name="mail-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput placeholder='Email' style={{ marginLeft: 10, width: 240 }} value={email} onChangeText={setEmail}></TextInput>
                </View>
                <View style={styles.login_infor}>
                    <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                    <TextInput secureTextEntry={true} placeholder='Password' style={{ marginLeft: 10, width: 240 }}
                        value={password} onChangeText={setPassword}
                    ></TextInput>
                </View>
            </View>
            <View style={styles.forget_password}>
                <Text style={{ color: 'violet', }} >Forget Password?</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button_login} onPress={gotoHomepage}>
                    <Text style={styles.button_login_content}
                    >Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Or login with</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={styles.icon_logo_login} source={require('../assets/icon-fb.png')}></Image>
                    <Image style={styles.icon_logo_login} source={require('../assets/icon-google.png')}></Image>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Don't have an account? </Text>
                    <Text
                        onPress={gotoSignup}
                        style={{ color: 'blue', fontWeight: 'bold', fontSize: 16, }}
                    >Sign up here!</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    login_view: {
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
    login_infor: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    forget_password: {
        left: 80,
        color: "pink",
    },
    button_login: {
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'transparent',
    },
    button_login_content: {
        color: 'white',
        textTransform: 'uppercase',
        width: 200,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    icon_logo_login: {
        width: 50,
        height: 50,
        margin: 20,
    }
})

export default LoginView;