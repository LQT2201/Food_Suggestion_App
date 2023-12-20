import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import { AuthProvider } from './AuthContext.js';
import HomepageView from './views/Homepage/HomepageView.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginView}
          />
          <Stack.Screen
            name="Signup"
            component={SignupView}
          />
          <Stack.Screen
            name="Homepage"
            component={HomepageView}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}


export default App;