import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, TextInput, Alert, Platform } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import SignupButton from "../assets/buttons/signupButton";
import axios from "axios";

export default function Signup() {
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleLinkPress = () => {
    Linking.openURL('https://www.example.com/terms-and-conditions'); // Replace with your terms and conditions URL
  };
  const handleSignupPress = async () => {
    try {
      if(!isSelected){
          Alert.alert('Please agree to the Terms and Conditions.');
          return;
      }
        const response = await axios.post('http://localhost:3000/signup', {
            username: username,
            email:email,
            password: password,
        });
        console.log(response);
        if(response.status==200){
          if(response.data.status){
            Alert.alert('Login Successful', `Welcome ${response.data.username}`);
          }else{
            if(Platform.OS=='web'){{
              window.alert(response.data.msg);
            }}else{
              Alert.alert(response.data.msg);
            }
          }

        }
    } catch (error) {
        Alert.alert('Login Failed', 'Invalid username or password');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
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
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.text}>
            I agree to all the{' '}
            <TouchableOpacity onPress={handleLinkPress}>
              <Text style={styles.link}>terms and conditions</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <SignupButton onPress={handleSignupPress} />
      </View>
      <View style={styles.bottom}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  top: {
    flex: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 50,
    // backgroundColor: 'green',
    padding: 20,
  },
  bottom: {
    flex: 25,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign:'center'
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
});
