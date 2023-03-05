import React, {useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles, getThemeColor} from '@/styles/base';
import * as api from './service';
import {useLocal} from '@/context/local';
import LoginPage from './component/LoginPage';
import TextInputHaveClose from '../../components/TextInputHaveClose';
import LinearButton from '@/components/LinearButton';
import {jump} from '@/utils/Navigation';

export default function Login(props) {
  const accountInfo = useRef({
    username: '',
    password: '',
  });
  const styles = useStyles();
  const colors = getThemeColor();
  const {useGet} = useLocal();
  console.log(styles);

  const setValue = (value, type) => {
    accountInfo.current[type] = value;
  };

  const login = () => {
    console.log(accountInfo.current);
    api
      .login(accountInfo.current)
      .then(res => {
        console.log(res);
      })
      .catch();
  };
  return (
    <LoginPage
      title={useGet('login.sign.in')}
      navigation={props.navigation}
      tip={useGet('login.sign.in.tip')}>
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Email')}
        placeholderTextColor={colors.fff20}
        onChangeText={value => setValue(value, 'username')}
      />
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Password')}
        placeholderTextColor={colors.fff20}
        theSecureTextEntry
        secureTextEntry
        onChangeText={value => setValue(value, 'password')}
      />
      <TouchableOpacity onPress={() => jump('Forget')}>
        <Text style={styles.loginTip}>{useGet('login.forget.password')}</Text>
      </TouchableOpacity>
      <LinearButton style={styles.loginButton} onPress={login}>
        <Text style={[styles.linearText, styles.font16, styles.fw700]}>{useGet('login.sign.in')}</Text>
      </LinearButton>
      <TouchableOpacity style={styles.center} onPress={() => jump('Register')}>
        <Text style={styles.loginTip}>
          {useGet('login.nothave.account')}
          <Text style={[styles.text, styles.fw700]}>
            {'  '}
            {useGet('login.sign.up')}
          </Text>
        </Text>
      </TouchableOpacity>
    </LoginPage>
  );
}
