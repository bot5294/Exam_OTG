import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, Linking, TouchableOpacity,Image,TextInput } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';

export default function login(){
    const [username,onChangeUsername] = React.useState("");
    const [email,onChangeEmail] = React.useState("");
    const [password,onChangePassword] = React.useState("");

    const TermsCheckbox = () => {
        const [isSelected, setSelection] = useState(false);
      
        const handleLinkPress = () => {
          Linking.openURL('https://www.example.com/terms-and-conditions'); // Replace with your terms and conditions URL
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
                placeholder="Full Name"
                />
                <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={password}
                placeholder="Email"
                />
                <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                />
        <Checkbox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.text}>
        I agree to all the
        <Text> </Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.link}>terms and conditions</Text>
        </TouchableOpacity>
      </Text>
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
    checkbox: {
        marginRight: 10,
      },
      text: {
        flexWrap: 'wrap',
      },
      link: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
})
}