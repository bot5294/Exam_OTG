import React from 'react';
import { Button, ButtonProps, StyleSheet, View } from 'react-native';

interface SignupButtonProps {
  onPress: ButtonProps['onPress'];
}

const SignupButton: React.FC<SignupButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
    <Button
      title="Signup"
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
export default SignupButton;
