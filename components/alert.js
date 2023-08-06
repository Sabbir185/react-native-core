import { StatusBar, View, Button, Alert } from 'react-native';

export default function NativeAlert() {

  return (
    <View>

        <Button title='Click Here' onPress={() => Alert.alert('Invalid Input')} />

        <Button title='Click Here' onPress={() => Alert.alert('Invalid Input', 'DOB incurrect')} />

        <Button title='Click Here' onPress={() => Alert.alert('Invalid Input', 'DOB incurrect', 
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log('Pressed cancel')
                    },
                    {
                        text: "OK",
                        onPress: () => console.log('Pressed Okay')
                    }
                ]
            )}
         />
        
    </View>
  );
}