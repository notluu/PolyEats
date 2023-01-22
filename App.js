import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, } from '@expo/vector-icons';

import TabBarIcon from './components/TabBarIcon';
import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import Stall from './Stall';
import AddItemsPage from './AddItemsPage'
import OrderPage from './OrderPage';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <Tab.Screen
        name="OrderPage"
        component={OrderPage}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="shoppingcart" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}} />
        <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Stall" component={Stall} />
        <Stack.Screen name="AddItemsPage" component={AddItemsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}