import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodoScreen from './src/screen/AddTodoScreen';
import ViewTodosScreen from './src/screen/ViewTodoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewTodos">
          <Stack.Screen
            name="AddTodo"
            component={AddTodoScreen}
            options={{ title: 'Tambah To-Do' }}
          />
          <Stack.Screen
            name="ViewTodos"
            component={ViewTodosScreen}
            options={{ title: 'Lihat To-Do' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
