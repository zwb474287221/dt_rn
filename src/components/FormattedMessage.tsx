import React from 'react'
import { Text,TextProps } from 'react-native';
import { useLocal } from '@/context/local';

interface FormattedMessageProps extends TextProps{
  id: string
}

export default function FormattedMessage(props: FormattedMessageProps) {
  const { id, ...other } = props;
  const { useGet } = useLocal();
  return (
    <Text {...other} >{ useGet(id) } </Text>
  )
}
