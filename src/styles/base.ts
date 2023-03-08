import {StyleSheet} from 'react-native';
import { useTheme  } from '@react-navigation/native';
import LoginStyle from '@/page/login/styles';
import { scaleSize } from '@/utils/ScreenUtil';

const Styles: { [key: string]: any } = {
  LightStyle: null,
  DarkStyle: null,
};

export interface ColorsType {
  background:string,
  border: string,
  card: string,
  primary:string,
  text: string,
  fff20?: string,
  fff30?: string,
  fff40?: string,
  inputBg?: string,
  linearText?: string,
  messageBg?: string,
}

const getStyle = (type: 'DarkStyle' | 'LightStyle', colors: ColorsType | any) => {
  if (!Styles[type]) {
    Styles[type] = StyleSheet.create({
      wrapper: { flex: 1 },
      text: { color: colors.text },
      font16: { fontSize: scaleSize(16) },
      fw700: { fontWeight: "700" },
      linearText: { color: colors.linearText },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      ...LoginStyle(colors),
    });
  }
  return Styles[type];
};

const getStyleFormTheme = (isDark: boolean, colors: ColorsType | any) => {
  return getStyle(isDark ? 'DarkStyle' : 'LightStyle', colors);
};

export const useStyles = () => {
  const theme = useTheme();
  console.log({theme});
  return getStyleFormTheme(theme.dark, theme.colors);
};

export const getThemeColor = (): ColorsType | any => {
  const theme = useTheme();
  return theme.colors;
}
