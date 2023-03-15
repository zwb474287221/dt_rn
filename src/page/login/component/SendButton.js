import LinearButton from '@/components/LinearButton';
import { transparent } from '@/utils/Color';
import { scaleSize } from '@/utils/ScreenUtil';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default function SendButton() {
  return <TouchableOpacity style={{ marginLeft: 8,}}>
    <LinearGradient
      colors={['#7962E7', '#4169FF']}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      style={{
        borderRadius: scaleSize(15)
      }}>
      <View
        style={{
          margin: scaleSize(2),
          backgroundColor: '#fff5',
          borderRadius: scaleSize(15),
        }}>
        <Text>{useGet('')}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
}
