import React from 'react';
import {View, Text, Button} from 'react-native';
import {getBaseStyles} from '@/styles/base';

export default function Index() {
  const styles = getBaseStyles();
  console.log({styles});
  return (
    <View>
      <Text style={styles.text}>index22222222</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => AppNavigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
}
