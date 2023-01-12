import React, { useState, useRef, useEffect } from 'react';
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


const imageData = [
    { id: 1, uri: require('./assets/food/chickenrice.png'), food: 'Chicken Rice', price: '2.80', fc: 'Foodcourt 1', stall: 'Chicken Rice Stall' },
    { id: 2, uri: require('./assets/food/laksa.jpg'), food: 'Laksa', price: '3.00', fc: 'Foodcourt 2', stall: 'Laksa Stall' },
    { id: 3, uri: require('./assets/food/burger.webp'), food: 'Burger', price: '12.50', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 4, uri: require('./assets/food/steak.webp'), food: 'Steak', price: '23.90', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 5, uri: require('./assets/food/chickenwing.png'), food: 'Chicken Wing', price: '4.20', fc: 'Foodcourt 3', stall: 'Western Stall' },
    // Add more images here
];


function Stall({ route }) {
    const navigation = useNavigation();
    const { stallText } = route.params;
    const stallData = imageData.filter(item => item.stall === stallText);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.TopQ}>

                </View>
                <View style={styles.BottomQ}>
                    <View style={styles.stallTextContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={48} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.stallName}>{stallText}</Text>
                    </View>
                    <FlatList
                        data={stallData}
                        horizontal={true}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('AddItemsPage', { foodText: item.food })} >
                                <View style={styles.itemContainer}>
                                    <Image style={styles.image} source={item.uri} />
                                    <Text style={styles.food}>{item.food}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    
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
    searchBar: {
        marginTop: '-5%',
        //margin: '5%',
        padding: '3%',
        borderWidth: 1,
        borderColor: '#676767',
        borderRadius: 5,
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
    },
    TopQ: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FF5555',
        justifyContent: 'flex-start',
    },
    BottomQ: {
        flex: 4,
        width: '100%',
        backgroundColor: '#fff',

    },
    image: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
    },
    food: {
        color: '#000',
        fontSize: 16,

    },
    price: {
        color: '#676767'
    },
    searchResult: {
        paddingLeft: '6%',
        paddingTop: '3%',
    },
    stallName: {
        fontSize: 32,
        alignSelf: 'center'
    },
    stallTextContainer: {
        flexDirection: 'row',
    },
    itemContainer: {
        alignItems: 'flex-start',
        padding: 10,
    },
    cogIcon: {
        flex: 1,
        justifyContent: 'flex-end',

    }

});
export default Stall;