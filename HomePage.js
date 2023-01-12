import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchPage from './SearchPage.js';




const imageData = [
    { id: 1, uri: require('./assets/swaaay.gif'), food: 'Food 1', fc: 'Foodcourt 1' },
    { id: 2, uri: require('./assets/swaaay.gif'), food: 'Food 2', fc: 'Foodcourt 2' },
    { id: 3, uri: require('./assets/swaaay.gif'), food: 'Food 3', fc: 'Foodcourt 3' },
    { id: 4, uri: require('./assets/swaaay.gif'), food: 'Food 4', fc: 'Foodcourt 4' },
    { id: 5, uri: require('./assets/swaaay.gif'), food: 'Food 5', fc: 'Foodcourt 5' },
    // Add more images here
];
//'./assets/swaaay.gif'
function HomePage() {

    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const handleSearch = (searchText) => {
        console.log(`Search text: ${searchText}`);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                keyboardVerticalOffset={60}
            >
                <View style={styles.TopQ}>

                </View>
                <View style={styles.BottomQ}>
                    <TouchableOpacity activeOpacity ={1} onPress={() => navigation.navigate('SearchPage')}>
                        <View style={styles.searchBar}>
                            <View style={styles.searchBarInnerContainer}>
                                <Ionicons name="search" size={12} color="#676767" />
                                <Text style={styles.loginButtonText}>Search...</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.recentScroll}>
                        <Text style={styles.recentText}>Most Recent Eats</Text>
                        <FlatList
                            data={imageData}
                            horizontal={true}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => console.log('Image pressed')} >
                                    <View style={styles.itemContainer}>
                                        <Image style={styles.image} source={item.uri} />
                                        <Text style={styles.food}>{item.food}</Text>
                                        <Text style={styles.fc}>{item.fc}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
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
    TopQ: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FF5555',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomQ: {
        flex: 3,
        width: '100%',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 5,
    },
    itemContainer: {
        alignItems: 'flex-start',
        padding: 10,

    },
    image: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
    },
    recentScroll: {
        padding: '5%',
    },
    recentText: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: '1%',
    },
    food: {
        color: '#000',
        fontSize: 16,
    },
    fc: {
        color: '#676767',
        fontSize: 16,
    },
    searchBar: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: '-6%',
        padding: '2%',
        borderWidth: 1,
        borderColor: '#676767',
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
        width: '90%',
    },
    searchBarInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '90%',
    },



});

export default HomePage;