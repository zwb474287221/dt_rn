import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import Home from '@/page/Home';
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
};

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFF',
    border: 'transparent',
    card: '#FFF',
    primary: '#7962E7',
    text: '#000',
    fff20: '#CCD7E5',
    fff30: '#A2ABCA',
    fff40: '#7B86AD'
  },
};
const darkTheme = {
  dark: true,
  colors: {
    background: '#192738',
    border: 'transparent',
    card: '#192738',
    primary: '#7962E7',
    text: '#fff',
    fff20: 'rgba(255, 255, 255, 0.2)',
    fff30: 'rgba(255, 255, 255, 0.3)',
    fff40: 'rgba(255, 255, 255, 0.4)'
  },
};

const Route = () => {
  const theme = useTheme();
  const isDarkMode = theme.theme === 'dark';

  return (
    <>
      <StatusBar
        backgroundColor={isDarkMode ? darkTheme.colors.background : lightTheme.colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer
        theme={isDarkMode ? darkTheme : lightTheme}
        ref={ref => {
          global.AppNavigation = ref;
        }}>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;
