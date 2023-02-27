import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('test');
  console.log('122222222');
  console.log('333333333');
  console.log('444444444');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 000000</Text>
      <StatusBar style="auto" />
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
