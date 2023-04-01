import React from 'react'
import { useTheme } from '@react-navigation/native';
import { Image, ImageProps } from 'react-native';
import { drakIcon, lightIcon } from './icon';
import { scaleSize } from '@/utils/ScreenUtil';

const IconMap: {
  drakIcon: { [key: string]: any },
  lightIcon: { [key: string]: any }
} = {
  drakIcon,
  lightIcon
}

interface IconProps extends Omit<ImageProps, 'source'> {
  size?: number,
  name: string;
}

export default function Icon(props: IconProps) {
  const theme = useTheme();
  const key = theme.dark ? 'drakIcon' : 'lightIcon';
  const { name, size = scaleSize(24), style, ...other } = props;
  return (
    <Image source={IconMap[key][name] ?? ''} style={[{ resizeMode: 'center', width: size, height: size }, style]} {...other} />
  )
}
