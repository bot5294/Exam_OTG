import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Image,TextInput } from "react-native";
import React from "react";

export default function login(){
    const [username,onChangeUsername] = React.useState("");
    const [password,onChangePassword] = React.useState("");
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
                />
            </View>
            <View style={styles.bottom}>
                <Text>3</Text>
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
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    center:{
        flex:50,
        backgroundColor:'green',
        // alignItems:'center',
        // justifyContent:'center'
    },
    bottom:{
        flex:25,
        backgroundColor:'blue',
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
    }
})