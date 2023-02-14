import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/context/theme';
import {useStyles} from '@/styles/base';
import * as api from './service';
import {useLocal, ZH_CN, EN_US} from '@/context/local';
import LoginPage from './component/LoginPage';
import TextInputHaveClose from '../../components/TextInputHaveClose';
import Button from '@/components/Button';

export default function Login(props) {
  const [text, setText] = useState('77');
  const styles = useStyles();
  const {setTheme} = useTheme();
  const {useGet, setLocal} = useLocal();
  console.log(styles);
  setTheme('dark');
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
    <LoginPage title={useGet('login.title')} navigation={props.navigation}>
      <TextInputHaveClose />
      <Button>
        <Text>
          {useGet('login.title')}
        </Text>
      </Button>
      {/* <Button onPress={() => setLocal(ZH_CN)} title="设置中文" />
      <Button onPress={() => setLocal(EN_US)} title="设置英文" /> */}
    </LoginPage>
  );
}
