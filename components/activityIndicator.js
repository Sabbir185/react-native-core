import { ActivityIndicator, View } from 'react-native';

export default function NativeActivityIndicator() {

  return (
    <View>
        <ActivityIndicator />
        {/* <ActivityIndicator size={40} /> */}
        <ActivityIndicator size={'large'} />
        <ActivityIndicator size={'large'} color={'red'} />
        <ActivityIndicator size={'large'} color={'red'} animating={true} />
    </View>
  );
}