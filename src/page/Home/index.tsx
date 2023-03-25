import React from 'react';
import {View, Text, Button} from 'react-native';
import {useStyles} from '@/styles/base';
import {jump} from '@/utils/Navigation';


export default function Index() {
  const styles = useStyles();
  const openMessage = () => {
    message.show({
      title: '123',
      content: '内容',
    });
  };
  const openErrorMessage = () => {
    message.error({
      content: (colors) => <Text style={{ color: colors.text }}>内容</Text>,
    });
  };
  return (
    <View>
      <Text style={styles.text}>index22222222</Text>
      <Button title="去登陆" onPress={() => jump('Login')} />
      <Button title="test messgae" onPress={openMessage} />
      <Button title="test Errormessgae" onPress={openErrorMessage} />

    </View>
  );
}
