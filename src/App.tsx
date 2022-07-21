import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';

// import ButtonPrimary from './components/ButtonPrimary';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(): JSX.Element {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="recentExpenses" component={RecentExpenses} />
      <BottomTabs.Screen name="allExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <ButtonPrimary /> */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='expensesOverview'>
          <Stack.Screen name="manageExpenses" component={ManageExpense} />
          <Stack.Screen name="expensesOverview" component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
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

