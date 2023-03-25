import React, { useCallback, useState, forwardRef, useImperativeHandle } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';
import { ColorsType, getThemeColor } from '@/styles/base';
import { scaleSize } from '@/utils/ScreenUtil';
import { guid } from '@/utils/utils';

export interface ErrorMessageAction {
  error(option: ErrorMessageOption): void,
}

type renderContent = (color: ColorsType) => React.ReactNode;

export type ErrorMessageOption = {
  key?: string;
  content: React.ReactNode | renderContent;
}

const Message = forwardRef<ErrorMessageAction>((props, refs) => {
  const [messageList, setMessageList] = useState<ErrorMessageOption[]>([]);

  const remove = useCallback(() => {
    setMessageList(value => value.slice(1));
  }, []);

  const error = useCallback((option: ErrorMessageOption) => {
    setMessageList(value => value.concat({
      key: guid(),
      ...option,
    }));
    setTimeout(remove, 3000)
  }, []);

  useImperativeHandle(refs, () => ({
    error,
  }));

  const colors = getThemeColor();

  return (
    <View style={styles.warpper}>
      {
        messageList.map(item => <View key={item.key} style={[styles.messageItem, { backgroundColor: colors.messageBg }]}>
          {typeof item.content === 'function' ? item.content(colors) : item.content}
        </View>)
      }
    </View>
  )
})

const styles = StyleSheet.create({
  warpper: {
    position: 'absolute', top: StatusBar.currentHeight, left: 0, right: 0
  },
  messageItem: {
    alignSelf: 'center',
    borderRadius: scaleSize(14),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(8),
    marginBottom: scaleSize(8),
  }
})

export default Message