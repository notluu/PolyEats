import React, { useState } from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function LoginPage() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    navigation.navigate('HomeScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={60}
      >

        <View style={styles.TopHalf}>
          { }
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor='white'
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.BottomHalf}>

          { }
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='white'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <View style={styles.loginButtonView}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'column',
    justifyContent: 'stretch',
  },
  input: {
    width: '85%',
    height: 44,
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
    color: 'white',
    margin: 10,
    alignSelf: 'center',
    padding: 10,
    fontSize: 18,
  },
  TopHalf: {
    flex: 1,
    width: '100%',
    backgroundColor: '#DA5858',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  BottomHalf: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FF5555',
  },
  loginButtonView: {
    paddingTop: 50,
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#DA5858',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default LoginPage;