import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
const Img = require('./assets/adaptive-icon.png')

export default function ButtonPressable() {
  return (
    <View style={styles.container}>
      <Button
        title='Submit'
        onPress={() => console.log("On pressed")}
        // disabled
        color={'midnightblue'}
      />

      <Pressable onPressIn={()=> console.log("Img Pressed")} >
        <Image
          source={Img} style={{ height: 300, width: 300, borderColor: 'red' }}
        />
      </Pressable>


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
