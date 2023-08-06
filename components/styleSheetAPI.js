import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StyleSheetAPI (){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, React Native</Text>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'plum', margin: 60, borderRadius: 10},
    title: {color: 'red', marginTop: 20, marginLeft: 50},
})