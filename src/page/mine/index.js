import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@/components/Icon';
import { useStyles } from '@/styles/base';
import { useTheme } from '@react-navigation/native';
import { useTheme as useTheme2 } from '@/context/theme';
import { scaleSize } from '@/utils/ScreenUtil';

const img = 'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF';

export default function Mine() {
  const styles = useStyles();
  const { setTheme } = useTheme2();
  const theme = useTheme();

  const ItemList = [
    {
      icon: 'notifications',
      title: 'Notification management',
      tip: 'Add',
    },
    {
      icon: 'language',
      title: 'Language',
      tip: 'Add',
    },
    {
      icon: 'telegram',
      title: 'Telegram official',
    },
    {
      icon: 'file',
      title: 'Documentation',
    },
    {
      icon: 'about',
      title: 'About us',
      tip: 'Add',
    },
  ];

  return (
    <ScrollView>
      <LinearGradient colors={['#7962E7', '#4169FF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <SafeAreaView>
          <View style={[styles.row, styles.MineInfo]}>
            <Image style={styles.headerImg} source={{ uri: img }} />
            <Text style={styles.Name}>123</Text>
            <TouchableOpacity
              onPress={() => {
                setTheme(theme.dark ? 'light' : 'dark');
              }}>
              <Icon size={scaleSize(24)} name={theme.dark ? 'sun' : 'moon'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.MineWallet, styles.row]}>
            <Icon name="wallet" size={scaleSize(24)} />
            <Text style={styles.WalletText}>My Wallet</Text>
            <Text style={[styles.BindTipText, styles.font14]}>Bind wallet now</Text>
            <Icon name="rightf7" size={scaleSize(24)} />
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
      <View style={[styles.row, styles.CardView]}>
        <View style={[styles.MineCard, styles.MineInviteCard]}>
          <View style={styles.row}>
            <Icon name="gift" />
            <Text style={[styles.MineInviteesText, styles.font24, styles.fw700]}>0</Text>
          </View>
          <Text style={[styles.fff70, styles.fw500, styles.font14, styles.marginTop8]}>Number of invitees</Text>
        </View>
        <View style={[styles.MineCard, styles.MineInviteCodeCard]}>
          <View style={styles.row}>
            <Icon name="link" />
            <Text style={[styles.MineLinkText, styles.font24, styles.fw700]}>0</Text>
          </View>
          <Text style={[styles.fff70, styles.fw500, styles.font14, styles.marginTop8]}>Copy Invitation link</Text>
        </View>
      </View>
      <View style={styles.MineListView}>
        {ItemList.map(item => {
          return (
            <TouchableOpacity key={item.title} style={[styles.MineListItem, styles.row]}>
              <Icon name={item.icon} />
              <Text style={[styles.text, styles.font16, styles.fw500, styles.marginLeft8, { flex: 1 }]}>{item.title}</Text>
              <Text style={[styles.MineListItemTip, styles.fw500, styles.font14]}>{item.tip}</Text>
              <Icon name="rightf2" size={scaleSize(24)} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
