import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LoginStyle from '@/page/login/styles';

const Styles = {
  LightStyle: null,
  DarkStyle: null,
};

const getStyle = (type, colors) => {
  if (!Styles[type]) {
    Styles[type] = StyleSheet.create({
      text: {color: colors.text},
      ...LoginStyle(colors),
    });
  }
  return Styles[type];
};

const getStyleFormTheme = (isDark, colors) => {
  return getStyle(isDark ? 'DarkStyle' : 'LightStyle', colors);
};

export const useStyles = () => {
  const theme = useTheme();
  console.log({theme});
  return getStyleFormTheme(theme.dark, theme.colors);
};
