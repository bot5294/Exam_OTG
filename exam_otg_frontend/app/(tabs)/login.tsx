import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Image,TextInput, TouchableOpacity, Linking, Alert, Platform } from "react-native";
import React, { useEffect } from "react";
import LoginButton from "../assets/buttons/loginButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function login(){
    const [username,onChangeUsername] = React.useState("");
    const [password,onChangePassword] = React.useState("");
    function handleLinkPress(): void {
        Linking.openURL('/signup');
    }
    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //       const token = await AsyncStorage.getItem('token');
    //       if (token) {
    //         // Validate the token with the backend if necessary
    //         // Navigate to the main app screen
    //       }
    //     };
    
    //     checkLoginStatus();
    //   }, []);

    const handleLoginPress = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password,
            });
            await AsyncStorage.setItem('token',response.data.token);
            showAlert('Login Successful', `Welcome ${response.data.username}`);
        } catch (error) {
            showAlert('Login Failed', 'Invalid username or password'+ error);
        }
      };
      const showAlert = (title: string, message: string | undefined) => {
        if (Platform.OS === 'web') {
          window.alert(`${title}\n\n${message}`);
        } else {
          Alert.alert(title, message);
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.tinylogo}
                source={{
                    uri:'https://reactnative.dev/img/tiny_logo.png',
                }} />
            </View>
            <View style={styles.center}>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Username"
                />
                <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                />
                          <Text style={styles.text}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
          <LoginButton onPress={handleLoginPress} />
            </View>
            <View style={styles.bottom}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        // alignItems:'center',
        // justifyContent:'center'
    },
    top:{
        flex:25,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    center:{
        flex:50,
        // backgroundColor:'green',
        // alignItems:'center',
        // justifyContent:'center'
    },
    bottom:{
        flex:25,
        // backgroundColor:'blue',
        // alignItems:'center',
        // justifyContent:'center'
    },
    tinylogo:{
        width:50,
        height:50
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10
    },
    text:{
        textAlign:'center'
    },
    link:{
        color: 'blue',
        textDecorationLine: 'underline',
    }
})