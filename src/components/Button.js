import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

// interface ButtonProps extends TouchableOpacityProps {
//   key?: any,
//   style?: StyleProp<ViewStyle>,
//   title?: string,
//   children?: any,
//   textStyle?: StyleProp<TextStyle>,
//   onPress: () => void,
//   loading?: boolean,
//   disabled?: boolean,
//   disabledClose?: ColorValue,
//   type?: string,
// }

function Button(Props) {
  const {
    style,
    title,
    children = [],
    textStyle,
    onPress,
    loading,
    disabled,
    disabledClose,
    type,
    ...other
  } = Props;
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: loading || disabled ? disabledClose || '#999' : theme.colors.primary},
        style,
      ]}
      disabled={loading || disabled}
      onPress={onPress}
      {...other}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default Button;
