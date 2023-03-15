import React, {useRef,useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useStyles, getThemeColor} from '@/styles/base';
import * as api from './service';
import {useLocal} from '@/context/local';
import LoginPage from './component/LoginPage';
import TextInputHaveClose from '../../components/TextInputHaveClose';
import LinearButton from '@/components/LinearButton';
import FormattedMessage from '@/components/FormattedMessage';
import { goBack } from '@/utils/Navigation';

export default function Forget(props) {
  const [loading, setLoading] = useState(false);
  const styles = useStyles();
  const colors = getThemeColor();
  const {useGet} = useLocal();
  const accountInfo = useRef({
    mail: '',
  });

  const setValue = (value, type) => {
    accountInfo.current[type] = value;
  };

  const forget = () => {
    console.log(accountInfo);
    if (!accountInfo.current.mail) {
      global.message.show({
        // eslint-disable-next-line react-hooks/rules-of-hooks
        title: useGet('login.reset_tip'),
      });
      return;
    }
    setLoading(true);
    api
      .reset({
        mail: accountInfo.current.mail,
      })
      .then(res => {
        if (res && res.code === 0) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          global.message.show({ title: useGet('login.reset_success') });
          goBack();
        }
      }).then(() => {
        setLoading(false);
      });
  };
  return (
    <LoginPage
      title={useGet('login.forget.password')}
      navigation={props.navigation}
      tip={useGet('login.sendEmail')}>
      <TextInputHaveClose
        style={styles.loginInput}
        inputStyle={styles.loginBackIcon}
        placeholder={useGet('login.placeholder.Email')}
        placeholderTextColor={colors.fff20}
        onChangeText={value => setValue(value, 'mail')}
      />
      <LinearButton disabled={loading} style={styles.loginButton2} onPress={forget}>
        <FormattedMessage
          style={[styles.linearText, styles.font16, styles.fw700]}
          id="login.reset_pwd"
        />
      </LinearButton>
    </LoginPage>
  );
}
