import { ColorsType } from "@/styles/base";
import { scaleSize } from "@/utils/ScreenUtil";

import {
  StyleProp, ViewStyle, TextStyle,
} from 'react-native';

export default (colors: ColorsType): { [key: string]: StyleProp<ViewStyle | TextStyle> } => ({
  loginWrapper: { flex: 1, paddingHorizontal: scaleSize(28) },
  loginTitle: { color: colors.text, fontSize: 32 }
});
