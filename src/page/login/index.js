import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles, getThemeColro} from '@/styles/base';
import * as api from './service';
import {useLocal} from '@/context/local';
import LoginPage from './component/LoginPage';
import TextInputHaveClose from '../../components/TextInputHaveClose';
import LinearButton from '@/components/LinearButton';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = useStyles();
  const colors = getThemeColro();
  const {useGet} = useLocal();
  console.log(styles);

  const login = () => {
    console.log(email, password);
    api
      .login({
        username: email,
        password: password,
      })
      .then(res => {
        console.log(res);
      })
      .catch();
  };
  return (
    <LoginPage
      title={useGet('login.title')}
      navigation={props.navigation}
      tip={useGet('login.sign.in.tip')}>
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Email')}
        placeholderTextColor={colors.fff20}
        onChangeText={setEmail}
      />
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Password')}
        placeholderTextColor={colors.fff20}
        theSecureTextEntry
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={styles.loginTip}>{useGet('login.forget.password')}</Text>
      </TouchableOpacity>
      <LinearButton style={styles.loginButton} onPress={login}>
        <Text style={[styles.text, styles.font16, styles.fw700]}>{useGet('login.title')}</Text>
      </LinearButton>
      <Text style={[styles.loginTip, {textAlign: 'center'}]}>
        {useGet('login.nothave.account')}
        <Text style={[styles.text, styles.fw700, {marginLeft: 8}]}>
          {'  '}
          {useGet('login.sign.up')}
        </Text>
      </Text>
    </LoginPage>
  );
}
