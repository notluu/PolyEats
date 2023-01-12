import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        {/* first color section */}
      </View>
      <View style={styles.secondContainer}>
        {/* second color section */}
      </View>
      <View style={styles.thirdContainer}>
        {/* third color section */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  firstContainer: {
    flex: 2,
    backgroundColor: '#DA5858',
  },
  secondContainer: {
    flex: 1,
    backgroundColor: '#FF5555',
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#FF5555',
    padding: 10,
    width: 300,
    borderRadius: 10,
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default HomeScreen;