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
      icon: 'iconwode',
      iconColor: '#F7931A',
      title: 'Notification management',
      tip: 'Add',
    },
    {
      icon: 'iconwode',
      iconColor: '#4169FF',
      title: 'Language',
      tip: 'Add',
    },
    {
      icon: 'iconwode',
      iconColor: '#2E93F0',
      title: 'Telegram official',
    },
    {
      icon: 'iconwode',
      iconColor: '#7962E7',
      title: 'Documentation',
    },
    {
      icon: 'iconwode',
      iconColor: '#2196F3',
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
              <Icon style={{ width: scaleSize(20)}} name="link" />
              {/* <Icon name="iconwode" style={styles.WalletIcon} /> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.MineWallet, styles.row]}>
            <Icon style={styles.WalletIcon} name="iconwode" />
            <Text style={styles.WalletText}>My Wallet</Text>
            <Text style={[styles.BindTipText, styles.font14]}>Bind wallet now</Text>
            <Icon style={styles.RightIcon} name="iconwode" />
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
      <View style={[styles.row, styles.CardView]}>
        <View style={[styles.MineCard, styles.MineInviteCard]}>
          <View style={styles.row}>
            <Icon style={[styles.text, styles.font24, { flex: 1 }]} name="iconwode" />
            <Text style={[styles.text, styles.font24, styles.fw700]}>0</Text>
          </View>
          <Text style={[styles.fff70, styles.font14, styles.marginTop8]}>Number of invitees</Text>
        </View>
        <View style={[styles.MineCard, styles.MineInviteCodeCard]}>
          <View style={styles.row}>
            <Icon style={{ width: scaleSize(20)}} name="link" />
            <Text style={[styles.text, styles.font24, styles.fw700]}>0</Text>
          </View>
          <Text style={[styles.fff70, styles.font14, styles.marginTop8]}>Copy Invitation link</Text>
        </View>
      </View>
      <View style={styles.MineListView}>
        {ItemList.map(item => {
          return (
            <TouchableOpacity key={item.title} style={[styles.MineListItem, styles.row]}>
              <Icon name={item.icon} style={[styles.font20, { color: item.iconColor }]} />
              <Text style={[styles.text, styles.font16, styles.fw500, styles.marginLeft8, { flex: 1 }]}>{item.title}</Text>
              <Text style={[styles.MineListItemTip, styles.fw500, styles.font14]}>{item.tip}</Text>
              <Icon style={[styles.MineListItemTip, styles.font14, styles.marginLeft8]} name="iconwode" />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
