import React, {useContext, createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import LocalStorage from '@/utils/LocalStorage';

export const ThemeContext = createContext();

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  const sysTheme = useColorScheme(); // 系统主题
  const setTheme = type => {
    global.localStorage.set('theme', type);
    theme.setTheme(type);
  };

  return {
    theme: theme.theme || sysTheme,
    setTheme: setTheme,
  };
};

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    (global.localStorage ?? LocalStorage)?.get('theme').then(setTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
