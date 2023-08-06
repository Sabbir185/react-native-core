import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, Modal, StyleSheet, Text, View, } from 'react-native';

export default function ModalCoreComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <View style={styles.container}>

        <Button title='Open Modal' onPress={() => setIsModalOpen(true)}  />

        <Modal
            visible={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            animationType='slide'
            presentationStyle='formSheets'
        >
            <View style={{backgroundColor: 'lightblue', flex: 1, padding: 60}}>
                <Text>Modal Content</Text>
                <Button title='Close Modal'  onPress={() => setIsModalOpen(false)} />
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
