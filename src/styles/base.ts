import {StyleSheet} from 'react-native';
import { useTheme  } from '@react-navigation/native';
import LoginStyle from '@/page/login/styles';
import MineStyle from '@/page/mine/styles';
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
  const isDark = type === 'DarkStyle';
  if (!Styles[type]) {
    Styles[type] = StyleSheet.create({
      wrapper: { flex: 1 },
      text: { color: colors.text },
      font16: { fontSize: scaleSize(16) },
      font14: { fontSize: scaleSize(14), lineHeight: scaleSize(17) },
      font24: { fontSize: scaleSize(24), lineHeight: scaleSize(29) },
      font20: { fontSize: scaleSize(20), lineHeight: scaleSize(20) },
      marginTop8: { marginTop: scaleSize(8) },
      marginLeft8: { marginLeft: scaleSize(8) },
      marginRight8: { marginRight: scaleSize(8) },
      marginBottom8: { marginBottom: scaleSize(8) },
      fw700: { fontWeight: "700" },
      fw500: { fontWeight: "500" },
      linearText: { color: colors.linearText },
      row: { flexDirection: 'row', alignItems: 'center' },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      ...LoginStyle(colors),
      ...MineStyle(colors, isDark)
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
