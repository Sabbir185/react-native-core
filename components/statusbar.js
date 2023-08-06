import { StatusBar, View } from 'react-native';

export default function NativeStatusBar() {

  return (
    <View>
        <StatusBar 
            backgroundColor={'green'}
            // hidden
            barStyle={'dark-content'}
            
        />
    </View>
  );
}