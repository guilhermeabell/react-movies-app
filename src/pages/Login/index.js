import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

const Login = ({ navigation }) => {
  function handleNavigate() {
    navigation.navigate('Home');
  }    

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Login</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Login;