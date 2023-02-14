import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LoginStyle from '@/page/login/styles';

const Styles: { [key: string]: any } = {
  LightStyle: null,
  DarkStyle: null,
};

export interface ColorsType {
  background:string,
  border: string,
  card: string,
  primary:string,
  text:string,
}

const getStyle = (type: 'DarkStyle' | 'LightStyle', colors: ColorsType) => {
  if (!Styles[type]) {
    Styles[type] = StyleSheet.create({
      wrapper: { flex: 1 },
      text: {color: colors.text},
      ...LoginStyle(colors),
    });
  }
  return Styles[type];
};

const getStyleFormTheme = (isDark: boolean, colors: ColorsType) => {
  return getStyle(isDark ? 'DarkStyle' : 'LightStyle', colors);
};

export const useStyles = () => {
  const theme = useTheme();
  console.log({theme});
  return getStyleFormTheme(theme.dark, theme.colors);
};
