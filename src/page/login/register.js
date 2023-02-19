import React, {useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles, getThemeColro} from '@/styles/base';
import * as api from './service';
import {useLocal} from '@/context/local';
import LoginPage from './component/LoginPage';
import TextInputHaveClose from '../../components/TextInputHaveClose';
import LinearButton from '@/components/LinearButton';
import {goBack} from '@/utils/Navigation';

export default function Register(props) {
  const styles = useStyles();
  const colors = getThemeColro();
  const { local, useGet } = useLocal();
  const accountInfo = useRef({
    mail: '',
    password: '',
    vpassword: '',
    register_code: '',
    notification_lang: local,
    notification_timezone: new Date().getTimezoneOffset(),
  });

  const setValue = (value, type) => {
    accountInfo.current[type] = value;
  };

  const register = () => {
    api
      .register(accountInfo.current)
      .then(res => {
        console.log(res);
      })
      .catch();
  };
  return (
    <LoginPage
      title={useGet('login.sign.up')}
      navigation={props.navigation}
      tip={useGet('login.sign.up.tip')}>
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Email')}
        placeholderTextColor={colors.fff20}
        onChangeText={value => setValue(value, 'mail')}
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
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Password')}
        placeholderTextColor={colors.fff20}
        theSecureTextEntry
        secureTextEntry
        onChangeText={value => setValue(value, 'vpassword')}
      />
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.invitation.code')}
        placeholderTextColor={colors.fff20}
        onChangeText={value => setValue(value, 'register_code')}
      />
      <LinearButton style={styles.loginButton2} onPress={register}>
        <Text style={[styles.text, styles.font16, styles.fw700]}>{useGet('login.sign.up')}</Text>
      </LinearButton>
      <TouchableOpacity style={styles.center} onPress={goBack}>
        <Text style={styles.loginTip}>
          {useGet('login.have.account')}
          <Text style={[styles.text, styles.fw700]}>
            {'  '}
            {useGet('login.sign.in')}
          </Text>
        </Text>
      </TouchableOpacity>
    </LoginPage>
  );
}
