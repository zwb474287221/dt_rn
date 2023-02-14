import React, {Component} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  StyleProp, ViewStyle, TextInputProps, TextStyle,
} from 'react-native';
import {isAndroid, scaleSize} from '@/utils/ScreenUtil';
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
}

interface TextInputHaveCloseState {
  showClear: boolean,
  isSecureTextEntry: boolean,
  right: number,
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
      right: 10,
      value: props.defaultValue,
    };
  }

  _onFocus = () => {
    if (this.props.value !== '' || this.state.value !== '') {
      this.setState({
        showClear: true,
        right: 40,
      });
    }
    this.props.onFocus && this.props.onFocus();
    this.input.setNativeProps({
      style: [
        styles.TextInput,
        this.props.inputStyle,
        {
          borderBottomColor: '#2a2a2b',
        },
        isAndroid && !this.props.notClearButton ? {paddingRight: 40} : null
      ],
    });
    this.props.onFocus && this.props.onFocus();
  };

  _onBlur = () => {
    if (this.state.showClear) {
      this.setState({
        showClear: false,
        right: 10,
      });
    }
    this.input.setNativeProps({
      style: [
        styles.TextInput,
        this.props.inputStyle,
        {
          borderBottomColor: '#d4d4d3',
        },
        isAndroid && !this.props.notClearButton ? {paddingRight: 0} : null
      ],
    });
    this.props.onBlur && this.props.onBlur();
  };

  _onChangeText = (text: string) => {
    if (text === '') {
      this.setState({
        showClear: false,
        right: 10,
      });
    } else if (!this.state.showClear) {
      this.setState({
        showClear: true,
        right: 40,
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
        style={[styles.secureTextEntryView, {right: this.state.right}]}
        onPress={this._clickTextEntry}>
        <Icon
          name={
            this.state.isSecureTextEntry ? 'iconyincang' : 'iconxianshimima'
          }
          size={scaleSize(16)}
          color={'#999'}
        />
      </TouchableOpacity>
    );
  };

  clear() {
    this.input.clear();
  }

  focus() {
    this.input.focus();
  }

  blur() {
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
            style={{position: 'absolute', right: 10, width: 20}}
            onPress={() => {
              this.input.clear();
              this.setState({showClear: false, right: 10});
            }}>
            <Icon name={'iconcuowu'} size={16} color={'#9c9c9c'}/>
          </TouchableOpacity>
        ) : null}
      </View>
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
    backgroundColor: '#fff',
    flex: 1,
    fontSize: scaleSize(14),
    color:'#333',
    borderBottomColor: '#d4d4d3',
    borderBottomWidth: 2,
  },
  secureTextEntryView: {
    position: 'absolute',
  },
});

export default TextInputHaveClose;
