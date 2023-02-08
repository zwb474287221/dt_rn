import React from 'react';
import {View, Text, Button} from 'react-native';
import {useStyles} from '@/styles/base';
import { jump } from '@/utils/Navigation';

export default function Index() {
  const styles = useStyles();
  console.log({styles});
  return (
    <View>
      <Text style={styles.text}>index22222222</Text>
      <Button
        title="去登陆"
        onPress={() => jump('Login')}
      />
    </View>
  );
}
