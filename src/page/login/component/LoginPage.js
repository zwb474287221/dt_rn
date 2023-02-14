import React, {useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useStyles} from '@/styles/base';
import {goBack, hideShadow} from '@/utils/Navigation';
import Icon from '@/components/Icon';
import {scaleSize} from '@/utils/ScreenUtil';

export default function LoginPage(props) {
  const styles = useStyles();
  const { onBack } = props;
  return (
    <ScrollView contentContainerStyle={styles.loginWrapper} keyboardShouldPersistTaps={'always'}>
      <SafeAreaView contentContainerStyle={styles.loginWrapper}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            paddingRight: 10,
            paddingBottom: 10,
          }}
          onPress={onBack || goBack}>
          <Icon name={'iconfanhui1-copy'} size={scaleSize(20)} />
        </TouchableOpacity>
        <Text style={styles.loginTitle}>{props.title}</Text>
        <Text>{props.tip}</Text>
        <View>{props.children}</View>
      </SafeAreaView>
    </ScrollView>
  );
}
