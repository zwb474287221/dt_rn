import React from 'react'
import { useTheme } from '@react-navigation/native';
import { Image, ImageProps } from 'react-native';

// 暗
const drakIcon: { [key: string]: any } = {
  back:require('@/assets/icon/back_drak.png'),
  link: require('@/assets/icon/link_drak.png'),
  closeeye: require('@/assets/icon/closeeye_drak.png'),
  eye: require('@/assets/icon/eye_drak.png'),
  home: require('@/assets/icon/home_drak.png'),
  homeActivite: require('@/assets/icon/home_active.png')
}

// 亮
const lightIcon: { [key: string]: any } = {
  back:require('@/assets/icon/back_light.png'),
  link: require('@/assets/icon/link_light.png'),
  closeeye: require('@/assets/icon/closeeye_light.png'),
  eye: require('@/assets/icon/eye_light.png'),
  home: require('@/assets/icon/home_light.png'),
  homeActivite: require('@/assets/icon/home_active.png')
}

const IconMap = {
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
  const { name, size, style, ...other } = props;
  return (
    <Image source={IconMap[key][name] ?? ''} style={[{ resizeMode: 'center', width: size }, style]} {...other} />
  )
}
