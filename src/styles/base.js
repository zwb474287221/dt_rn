import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const TextStyle = StyleSheet.create({
  text: {color: 'red'},
});

const DarkTextStyle = StyleSheet.create({
  Text: {color: '#fff'},
});

const getStyleFormTheme = colors => {
  return StyleSheet.create({
    text: {color: colors.text},
  });
};

export const getBaseStyles = () => {
  const theme = useTheme();
  return getStyleFormTheme(theme.colors);
};
