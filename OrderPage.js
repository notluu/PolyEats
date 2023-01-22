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
    KeyboardAvoidingView,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


const imageData = [
    { id: 1, uri: require('./assets/food/chickenrice.png'), food: 'Chicken Rice', price: '2.80', fc: 'Foodcourt 1', stall: 'Chicken Rice Stall', amount: '1' },
    { id: 2, uri: require('./assets/food/laksa.jpg'), food: 'Laksa', price: '3.00', fc: 'Foodcourt 2', stall: 'Laksa Stall', amount: '1' },
    { id: 3, uri: require('./assets/food/burger.webp'), food: 'Burger', price: '12.50', fc: 'Foodcourt 3', stall: 'Western Stall', amount: '1' },
    { id: 4, uri: require('./assets/food/steak.webp'), food: 'Steak', price: '23.90', fc: 'Foodcourt 3', stall: 'Western Stall', amount: '1' },
    { id: 5, uri: require('./assets/food/chickenwing.png'), food: 'Chicken Wing', price: '4.20', fc: 'Foodcourt 3', stall: 'Western Stall', amount: '1' },
    // Add more images here
];


function OrderPage({ route }) {

    const navigation = useNavigation();
    const totalPrice = route.params?.totalPrice || 0;
    const count = route.params?.count || 0;
    const food = route.params?.food || 'unknown';

    const handlePress = () => {
        navigation.navigate('HomePage');
    }

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
                        <View style={styles.squareContainer}>
                            <Text style={styles.amountText}>{count}x</Text>
                        </View>
                        <Text style={styles.recText}>{food}: ${totalPrice}</Text>
                    </View>
                    <View style={styles.orderPageBottom}>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                            }}
                        />
                        <Text style={styles.recText}>Total ${totalPrice}</Text>
                        <TouchableOpacity style={styles.cartButton} onPress={handlePress}>
                        <Text style={styles.cartText}>Add to Cart - ${totalPrice}</Text>
                        </TouchableOpacity>
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
        alignSelf: 'center',
        justifyContent: 'flex-start',

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
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareContainer: {
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#676767',
        borderWidth: 4,
        borderRadius: 5,
        //margin: '5%',
    },
    amountContainerText: {
        fontSize: 32,
        //paddingBottom: '20%',
    },
    cartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartButton: {
        backgroundColor: '#FF5555',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        
    },
    cartText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center'
    },
    recText: {
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        
    },
    orderPageBottom : {
        flex: 1,
        justifyContent: 'flex-end'
    },
    totalFlexContainer: {
        flex: 1,
        alignItems: 'row',
    },
    cogIcon: {
        flex: 1,
        justifyContent: 'flex-end',

    },

});
export default OrderPage;