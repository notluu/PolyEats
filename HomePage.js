import React, { useState } from 'react';
import {
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
import { Icon } from 'react-native-vector-icons/MaterialIcons';


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
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search..."
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                    <TouchableOpacity onPress={() => handleSearch(searchText)}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.BottomQ}>
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
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#676767',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    TopQ: {
        flex: 1,
        width: '100%',
        backgroundColor: '#DA5858',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    BottomQ: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 5,
    },
});

export default HomePage;