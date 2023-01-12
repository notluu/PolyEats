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

function HomePage() {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                keyboardVerticalOffset={60}
            >
                <View>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search..."
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
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
});

export default HomePage;