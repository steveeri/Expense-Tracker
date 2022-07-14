import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ButtonPrimary from './components/ButtonPrimary';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up APP.tsx to start working on your app!</Text>
      <ButtonPrimary />
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

