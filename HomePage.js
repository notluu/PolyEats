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
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import SearchPage from './SearchPage.js';




const imageData = [
    { id: 1, uri: require('./assets/food/chickenrice.png'), food: 'Chicken Rice', fc: 'Foodcourt 1', stall: 'Chicken Rice Stall' },
    { id: 2, uri: require('./assets/food/laksa.jpg'), food: 'Laksa', fc: 'Foodcourt 2', stall: 'Laksa Stall' },
    { id: 3, uri: require('./assets/food/burger.webp'), food: 'Burger', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 4, uri: require('./assets/food/steak.webp'), food: 'Steak', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 5, uri: require('./assets/food/chickenwing.png'), food: 'Chicken Wing', fc: 'Foodcourt 3', stall: 'Western Stall' },
    // Add more images here
];
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
            >
                <View style={styles.TopQ}>
                    <Text style={styles.Logo}>PolyEats</Text>
                </View>
                <View style={styles.BottomQ}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SearchPage')}>
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
                                    onPress={() => navigation.navigate('Stall', { stallText: item.stall })} >
                                    <View style={styles.itemContainer}>
                                        <Image style={styles.image} source={item.uri} />
                                        <Text style={styles.food}>{item.food}</Text>
                                        <Text style={styles.fc}>{item.fc}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={styles.cogIcon}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                            <FontAwesome5 name="home" size={32} color="#676767" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                            <FontAwesome5 name="cog" size={32} color="#676767" />
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
    Logo: {
        fontSize: 32,
        fontWeight: 'bold',
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
    cogIcon: {
        flex: 1,
        justifyContent: 'flex-end',

    }



});

export default HomePage;