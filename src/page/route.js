import React, { memo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, Text } from 'react-native';
import Home from '@/page/Home';
import Mine from '@/page/mine';
import Login from '@/page/login';
import Register from '@/page/login/register';
import Message from '@/components/Message';

import { useTheme } from '@/context/theme';
import Forget from './login/forget';
import FormattedMessage from '@/components/FormattedMessage';
import Icon from '@/components/Icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RenderIcon = memo((props) => {
  const { focused, activeName, name } = props;
  return <Icon {...props} name={focused ? activeName : name} size={20} />
})

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: ({ color }) => <FormattedMessage
          style={{ color }} id={"Home"} />,
        tabBarIcon: (props) => <RenderIcon {...props} name={'iconshouye'} activeName={'iconshouyexuanzhong'} />,
      }} />
      <Tab.Screen name="My" component={Mine}
        options={{
          tabBarLabel: ({ color }) => <FormattedMessage
            style={{ color }} id={"MY"} />,
          tabBarIcon: (props) => <RenderIcon {...props} name={'iconwode'} activeName={'iconwode-xuanzhong'} />,
        }}
      />
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
    fff40: '#7B86AD',
    inputBg: '#F1F6FC',
    linearText: '#fff',
    messageBg: '#F2F2F2CC',
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
    fff40: 'rgba(255, 255, 255, 0.4)',
    inputBg: '#1D2E43',
    linearText: '#fff',
    messageBg: '#1E1E1EBF',
  },
};

const Route = () => {
  const theme = useTheme();
  const isDarkMode = theme.theme === 'dark';

  return (
    <>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <NavigationContainer
        theme={isDarkMode ? darkTheme : lightTheme}
        ref={ref => {
          global.AppNavigation = ref;
        }}>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
        </Stack.Navigator>
        <Message ref={_ref => (global.message = _ref)} />
      </NavigationContainer>
    </>
  );
};

export default Route;
