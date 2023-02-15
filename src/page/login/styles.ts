import { ColorsType } from "@/styles/base";
import { scaleSize } from "@/utils/ScreenUtil";

import {
  StyleProp, ViewStyle, TextStyle,
} from 'react-native';

export default (colors: ColorsType): { [key: string]: StyleProp<ViewStyle | TextStyle> } => ({
  loginWrapper: { flex: 1, paddingHorizontal: scaleSize(28) },
  loginBack: { marginTop: 30 },
  loginBackIcon: { color: colors.text },
  loginTitle: { color: colors.text, fontSize: 32, marginTop: scaleSize(32), fontWeight: '700' },
  loginTip: { color: colors.fff40, marginTop: 8, marginBottom: 20 },
  loginInput: {
    backgroundColor: '#1D2E43',
    borderRadius: 15,
    height: 56,
    marginTop:4,
    marginBottom: 12,
    paddingHorizontal: scaleSize(16)
  },
  loginButton: {
    height: 56,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 8
  }
});
