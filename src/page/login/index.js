import React,{useState} from 'react';
import {Text, Button, View} from 'react-native';
import * as api from './service';

export default function Login() {
  const [text, setText] = useState("77");

  const login = () => {
    setText("123sss");
    api.login({
      username: 'haijian',
      password: '123456',
    }).then(res => {
      console.log(res);
    }).catch();
  };
  return (
    <View>
      <Text>Login123{text}</Text>
      <Button onPress={login} title="登陆" />
    </View>
  );
}
