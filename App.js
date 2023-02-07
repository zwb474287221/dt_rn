/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocalStorage from '@/utils/LocalStorage';
import Home from '@/page/Home';
import Login from '@/page/login';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  global.localStorage = LocalStorage;
  const _theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: 'red',
    },
  };
  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : _theme}
      ref={ref => {
        global.AppNavigation = ref;
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
