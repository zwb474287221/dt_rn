import React, { useCallback, useState, forwardRef, useImperativeHandle } from 'react'
import Mask from '../Mask';
import { View, Text, StyleSheet } from 'react-native';
import { getThemeColor } from '@/styles/base';
import { scaleSize } from '@/utils/ScreenUtil';
import Button from '../Button';

export interface TipMessageAction {
  show(option: MessageOption): void,
}

export type MessageOption = {
  title?: string,
  content?: string,
  button?: string,
  onOk?: () => void
}

const Message = forwardRef<TipMessageAction>((props, refs) => {
  const [option, setOption] = useState<null | MessageOption>(null);

  const close = useCallback(() => {
    setOption(null);
  }, []);

  const show = useCallback(setOption, []);

  useImperativeHandle(refs, () => ({
    show,
  }));

  const buttonPress = () => {
    close();
    option?.onOk?.();
  }

  const colors = getThemeColor();

  return (
    <Mask
      visible={Boolean(option)}
      close={close}
    >
      <View style={[styles.wrapper, { backgroundColor: colors.messageBg }]}>
        <Text style={[styles.title, styles.text, { color: colors.text }]}>{option?.title}</Text>
        <Text style={[styles.content, styles.text, { color: colors.text }]}>{option?.content}</Text>
        <View>
          <Button style={[styles.button, { backgroundColor: 'transparent', borderTopColor: colors.fff20 }]} onPress={buttonPress}>
            <Text style={styles.buttonText}>{option?.button ?? 'OK'}</Text>
          </Button>
        </View>
      </View>
    </Mask>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    width: scaleSize(270),
    alignSelf: 'center',
    borderRadius: scaleSize(14),
    overflow: 'hidden'
  },
  text: {
    marginHorizontal: scaleSize(16),
    textAlign: 'center'
  },
  title: {
    marginTop: scaleSize(20),
    marginBottom: scaleSize(8),
    fontSize: scaleSize(17),
    fontWeight: '500',
    lineHeight: scaleSize(22),
  },
  content: {
    marginBottom: scaleSize(20),
    fontSize: scaleSize(13),
    lineHeight: scaleSize(16),
  },
  button: {
    borderTopWidth: 1,
    marginTop: scaleSize(12),
    height: scaleSize(44),
    borderRadius: 0,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: scaleSize(17),
    lineHeight: scaleSize(22),
    color: '#007AFF'
  }
})

export default Message