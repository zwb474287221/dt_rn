import { type ColorsType } from "@/styles/base";
import { scaleSize } from "@/utils/ScreenUtil";

import {
  StyleProp, ViewStyle, TextStyle,
} from 'react-native';

export default (colors: ColorsType, dark: boolean): { [key: string]: StyleProp<ViewStyle | TextStyle> } => ({
  headerImg: { height: scaleSize(32), width: scaleSize(32), backgroundColor: '#fff', borderRadius: scaleSize(16) },
  MineInfo: { marginTop: scaleSize(8), paddingHorizontal: scaleSize(16), justifyContent: 'space-between' },
  Name: {
    flex: 1,
    marginHorizontal: scaleSize(8),
    color: '#fff',
    fontWeight: '700',
    fontSize: scaleSize(20),
    lineHeight: scaleSize(24)
  },
  MineWallet: {
    marginTop: scaleSize(49),
    marginHorizontal: scaleSize(16),
    paddingLeft: scaleSize(19),
    paddingRight: scaleSize(16),
    paddingVertical: scaleSize(12),
    borderTopLeftRadius: scaleSize(8),
    borderTopRightRadius: scaleSize(8),
    backgroundColor:'rgba(255, 255, 255, 0.2)'
  },
  WalletIcon: {
    color: '#fff',
    fontSize: scaleSize(19),
  },
  MineInviteesText: {
    textAlign: 'right',
    flex:1,
    color: dark ? '#fff' : '#4169FF',
  },
  MineLinkText: {
    textAlign: 'right',
    flex:1,
    color: dark ? '#fff' : '#7962E7',
  },
  WalletText: {
    flex: 1,
    marginLeft: scaleSize(10),
    color: '#fff',
    fontWeight: '500',
    fontSize: scaleSize(16),
    lineHeight: scaleSize(19)
  },
  BindTipText: {
    fontWeight: '500',
    color: '#fff'
  },
  RightIcon: {
    marginLeft: scaleSize(17),
    color: 'rgba(255, 255, 255, 0.7)'
  },
  CardView: {
    paddingVertical:scaleSize(16),
    paddingHorizontal:scaleSize(8),
  },
  MineCard: {
    color: colors.text,
    marginHorizontal: scaleSize(8),
    flex: 1,
    padding: scaleSize(12),
    borderRadius: scaleSize(15),
  },
  MineInviteCard: {
    backgroundColor: dark ? '#4169FF' : 'rgba(65, 105, 255, 0.1)',
  },
  MineInviteCodeCard: {
    backgroundColor: dark ? '#7962E7' : 'rgba(121, 98, 231, 0.1) ',
  },
  MineListView: {
    paddingHorizontal: scaleSize(16),
  },
  MineListItem: {
    paddingVertical: scaleSize(18),
    borderBottomWidth: scaleSize(0.5),
    borderBottomColor: dark ? 'rgba(255, 255, 255, 0.1)' : '#CCD7E5'    
  },
  MineListItemTip: {
    color: colors.fff40,
  }
});
