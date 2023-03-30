import React, { Component } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  StyleProp, ViewStyle, TextInputProps, TextStyle,
} from 'react-native';
import { isAndroid, scaleSize } from '@/utils/ScreenUtil';
import Icon from './Icon';

export interface TextInputHaveCloseProps extends TextInputProps {
  theSecureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>,
  style?: StyleProp<ViewStyle>,
  notClearButton?: boolean;
  secureTextEntry?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  clearIconColor?: string
}

interface TextInputHaveCloseState {
  showClear: boolean,
  isSecureTextEntry: boolean,
  value?: string,
}

class TextInputHaveClose extends Component<TextInputHaveCloseProps, TextInputHaveCloseState> {
  private input: any;

  constructor(props: Readonly<TextInputHaveCloseProps>) {
    super(props);
    this.state = {
      showClear: false,
      isSecureTextEntry: props.theSecureTextEntry
        ? props.theSecureTextEntry
        : false,
      value: props.defaultValue,
    };
  }

  _onFocus = () => {
    if ((this.props.value !== '' || this.state.value !== '') && this.state.showClear) {
      this.setState({
        showClear: true,
      });
    }
    this.input.setNativeProps({
      style: [
        styles.TextInput,
        this.props.inputStyle,
        isAndroid && !this.props.notClearButton ? { paddingRight: scaleSize(40) } : null
      ],
    });
    this.props.onFocus && this.props.onFocus();
  };

  _onBlur = () => {
    if (this.state.showClear) {
      this.setState({
        showClear: false,
      });
    }
    this.input.setNativeProps({
      style: [
        styles.TextInput,
        this.props.inputStyle,
        isAndroid && !this.props.notClearButton ? { paddingRight: 0 } : null
      ],
    });
    this.props.onBlur && this.props.onBlur();
  };

  _onChangeText = (text: string) => {
    if (text === '') {
      this.setState({
        showClear: false,
      });
    } else if (!this.state.showClear) {
      this.setState({
        showClear: true,
      });
    }
    this.setState({
      value: text,
    });
    this.props.onChangeText && this.props.onChangeText(text);
  };

  _clickTextEntry = () => {
    this.setState({
      isSecureTextEntry: !this.state.isSecureTextEntry,
    });
  }

  secureTextEntry = () => {
    return (
      <TouchableOpacity
        style={styles.secureTextEntryView}
        onPress={this._clickTextEntry}>
        <Icon
          name={
            this.state.isSecureTextEntry ? 'eye' : 'closeeye'
          }
          size={scaleSize(24)}
        />
      </TouchableOpacity>
    );
  };

  clear = () => {
    this.input.clear();
  }

  focus = () => {
    this.input.focus();
  }

  blur = () => {
    this.input.blur();
  }

  render() {
    const {
      inputStyle,
      style,
      notClearButton = false,
      secureTextEntry = false,
      onFocus,
      onBlur,
      onChangeText,
      ...other
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.focus}>
        <View style={[styles.TextInputView, style]}>
          <TextInput
            style={[styles.TextInput, inputStyle]}
            ref={item => this.input = item}
            autoCorrect={false}
            onChangeText={this._onChangeText}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            autoCapitalize="none"
            placeholderTextColor={'#aaa'}
            clearButtonMode={notClearButton ? 'never' : 'while-editing'}
            secureTextEntry={this.state.isSecureTextEntry}
            value={this.state.value}
            {...other}
          />
          {secureTextEntry && this.secureTextEntry()}
          {!notClearButton && this.state.showClear && isAndroid ? (
            <TouchableOpacity
              style={{ position: 'absolute', right: scaleSize(10), width: scaleSize(20) }}
              onPress={() => {
                this.input.clear();
                this.setState({ showClear: false, value: '', });
              }}>
              <Icon name={'iconcuowu'} size={16} />
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  TextInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    margin: 0,
    padding: 0,
    flex: 1,
    fontSize: scaleSize(14)
  },
  secureTextEntryView: {
    position: 'absolute',
    right: scaleSize(16)
  },
});

export default TextInputHaveClose;
