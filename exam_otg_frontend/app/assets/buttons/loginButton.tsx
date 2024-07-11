import React from 'react';
import { Button, ButtonProps, StyleSheet, View } from 'react-native';

interface LoginButtonProps {
  onPress: ButtonProps['onPress'];
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
    <Button
      title="Login"
      onPress={onPress}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%', // Adjust this value to control the button width
  },
});
export default LoginButton;
