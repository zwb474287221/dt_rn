import React from 'react';
import { Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '@/styles/base';
import {goBack} from '@/utils/Navigation';
import Icon from '@/components/Icon';
import {isIos, scaleSize} from '@/utils/ScreenUtil';

export default function LoginPage(props) {
  const styles = useStyles();
  const { onBack } = props;
  return (
    <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.loginWrapper} keyboardShouldPersistTaps='handled'>
          <TouchableOpacity
            style={styles.loginBack}
            onPress={onBack || goBack}>
            <Icon name={'iconfanhui1-copy'} style={styles.loginBackIcon} size={scaleSize(20)} />
          </TouchableOpacity>
          <Text style={styles.loginTitle}>{props.title}</Text>
          <Text style={styles.loginTip}>{props.tip}</Text>
          {props.children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>

  );
}
