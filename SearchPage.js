import React, { useState, useRef, useEffect  } from 'react';
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

const imageData = [
    { id: 1, uri: require('./assets/food/chickenrice.png'), food: 'Chicken Rice', fc: 'Foodcourt 1', stall: 'Chicken Rice Stall' },
    { id: 2, uri: require('./assets/food/laksa.jpg'), food: 'Laksa', fc: 'Foodcourt 2', stall: 'Laksa Stall' },
    { id: 3, uri: require('./assets/food/burger.webp'), food: 'Burger', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 4, uri: require('./assets/food/steak.webp'), food: 'Steak', fc: 'Foodcourt 3', stall: 'Western Stall' },
    { id: 5, uri: require('./assets/food/chickenwing.png'), food: 'Chicken Wing', fc: 'Foodcourt 3', stall: 'Western Stall' },
    // Add more images here
];


function SearchPage() {
    const navigation = useNavigation();

    const textInputRef = useRef();
    useEffect(() => {
        textInputRef.current.focus();
    }, []);

    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        return () => {
            setFilteredData([]);
            setSearchText('');
        }
    }, []);
    const handleSearch = (searchText) => {
        const filteredData = imageData.filter(item => item.food.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filteredData);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.TopQ}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={48} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.BottomQ}>
                    <TextInput
                        ref={textInputRef}
                        style={styles.searchBar}
                        placeholder="Search..."
                        onChangeText={text => { setSearchText(text) }}
                        value={searchText}

                        onSubmitEditing={() => handleSearch(searchText)}
                    />
                    {searchText !== "" && filteredData.length > 0 && (
                        <FlatList data={filteredData}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Stall', { stallText: item.stall })}>
                                    <View style={styles.searchResult}>
                                        <Text style={styles.food}>{item.food}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}


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
        flex: 6,
        width: '100%',
        backgroundColor: '#fff',
    },
    food: {
        color: '#000',
        fontSize: 16,

    },
    searchResult: {
        paddingLeft: '6%',
        paddingTop: '3%',
    },
    backButton: {
        paddingTop: '4%',
    }


});

export default SearchPage;