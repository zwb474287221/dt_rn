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
    api
      .login(accountInfo.current)
      .then(res => {
        if (res.code === 107) {
          const { mail, token } = res.data;
          message.show({
            title: useGet('login.step1'),
            content: useGet('login.step21'),
            button: [{
              title: useGet('login.step22'),
              onPress: () => {
                api.sendMail({
                  token,
                  mail
                }).then(res => {
                  if (res && res.code === 0) {
                    message.show({ title: useGet('login.hasSendMail') });
                  }
                })
              }
            },{
              title: useGet('cancel'),
            }]
          })
        }
      })
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
