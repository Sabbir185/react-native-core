import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MultipleStyleSheet() {

    return (
        <View style={styles.container}>

            <View style={[styles.box, styles.backgoundBlue, styles.boxShadow, styles.androidShadow]}>
                <Text style={styles.title}>Hello</Text>
            </View>

            <View style={[styles.box, styles.backgoundGreen, styles.androidShadow]}>
                <Text style={styles.title}>React Native</Text>
            </View>

        </View>
    );
};

// box style is sharing to common views
// to combine styles, we need array
export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'plum', margin: 60, borderRadius: 10 },
    box: {width: 100, height: 100, padding: 5, margin: 10, borderRadius: 5},
    backgoundBlue: {backgroundColor: 'lightblue'},
    backgoundGreen: {backgroundColor: 'lightgreen'},
    boxShadow: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    androidShadow: {
        elevation: 50
    }
})