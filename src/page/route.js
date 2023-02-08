import React from 'react';

import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/page/home';
import Mine from '@/page/mine';
import Login from '@/page/login';
import {useTheme} from '@/context/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Mine} />
    </Tab.Navigator>
  );
}

const Route = () => {
  const theme = useTheme();
  console.log(theme);
  const isDarkMode = theme.theme === 'dark';
  console.log(isDarkMode);
  console.log(DarkTheme);
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
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;