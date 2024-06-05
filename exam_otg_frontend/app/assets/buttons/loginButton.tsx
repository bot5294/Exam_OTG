import React from 'react';
import { Button, ButtonProps } from 'react-native';

interface LoginButtonProps {
  onPress: ButtonProps['onPress'];
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
  return (
    <Button
      title="Login"
      onPress={onPress}
    />
  );
}

export default LoginButton;
