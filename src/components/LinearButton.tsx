import { StyleSheet, TouchableOpacity, ButtonProps, ViewStyle, StyleProp } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import React from 'react'


interface LinearButtonType extends ButtonProps {
  children: any;
  style: StyleProp<ViewStyle> | undefined
}

export default function LinearButton(props: LinearButtonType) {
  const { children, style, ...other } = props;
  return (
    <TouchableOpacity {...other}>
      <LinearGradient
        colors={['#7962E7', '#4169FF']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={[{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }, style]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});