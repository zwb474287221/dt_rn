import React from 'react';
import {View, Text, Button} from 'react-native';
import {useStyles} from '@/styles/base';
import { jump } from '@/utils/Navigation';
import { useTheme } from '@/context/theme';

export default function Index() {
  const styles = useStyles();
  const {setTheme} = useTheme();
  console.log({ styles });
  const openMessage = () => {
    global.message.show({
      title: '123',
      content: '内容',
      
    });
  }
  return (
    <View>
      <Text style={styles.text}>index22222222</Text>
      <Button
        title="去登陆"
        onPress={() => jump('Login')}
      />
            <Button
        title="test messgae"
        onPress={openMessage}
      />

      <Button onPress={() => setTheme('light')} title="设置亮主题" />
      <Button onPress={() => setTheme('dark')} title="设置暗主题" />
      <Button onPress={() => setTheme('')} title="跟随系统" />
    </View>
  );
}
