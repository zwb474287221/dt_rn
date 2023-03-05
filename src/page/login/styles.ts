import { type ColorsType } from "@/styles/base";
import { scaleSize } from "@/utils/ScreenUtil";

import {
  StyleProp, ViewStyle, TextStyle,
} from 'react-native';

export default (colors: ColorsType): { [key: string]: StyleProp<ViewStyle | TextStyle> } => ({
  loginWrapper: { paddingHorizontal: scaleSize(28) },
  loginBack: { marginTop: scaleSize(30) },
  loginBackIcon: { color: colors.text },
  loginTitle: { color: colors.text, fontSize: 32, marginTop: scaleSize(32), fontWeight: '700' },
  loginTip: { color: colors.fff40, marginTop: scaleSize(8), marginBottom: scaleSize(20) },
  loginInput: {
    backgroundColor: colors.inputBg,
    borderRadius: 15,
    height: scaleSize(56),
    marginTop: scaleSize(4),
    marginBottom: scaleSize(12),
    paddingHorizontal: scaleSize(16)
  },
  loginButton: {
    height: scaleSize(56),
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: scaleSize(4),
    marginBottom: scaleSize(8)
  },
  loginButton2: {
    height: scaleSize(56),
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: scaleSize(12)
  }
});
