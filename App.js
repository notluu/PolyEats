import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomePageTabs() {
  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      activeTintColor: '#e91e63',
      labelStyle: { fontSize: 12, },
      style: { backgroundColor: '#f4511e', },
    }}>
      <Tab.Screen name="HomePage" component={HomePage} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="SearchPage" component={SearchPage} />
    </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePageTabs} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}