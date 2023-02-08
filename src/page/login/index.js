import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import { useTheme } from '@/context/theme';
import {useStyles} from '@/styles/base';
import * as api from './service';

export default function Login() {
  const [text, setText] = useState('77');
  const styles = useStyles();
  const {setTheme} = useTheme();
  console.log(styles);
  const login = () => {
    setText('123sss');
    api
      .login({
        username: 'haijian',
        password: '123456',
      })
      .then(res => {
        console.log(res);
      })
      .catch();
  };
  return (
    <View>
      <Text style={styles.text}>Login123{text}</Text>
      <Button onPress={login} title="登陆" />
      <Button onPress={() => setTheme('light')} title="设置亮主题" />
      <Button onPress={() => setTheme('dark')} title="设置暗主题" />
      <Button onPress={() => setTheme('')} title="跟随系统" />
    </View>
  );
}
