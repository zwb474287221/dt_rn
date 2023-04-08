import { useLocal } from '@/context/local'
import React from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

export default function SelectLang() {

  const { setLocal } = useLocal();

  const changeLange = (item) => {
    setLocal(item.value)
  }

  const renderItem = ({ item, index, separators }) => {
    return <TouchableOpacity onPress={() => { changeLange(item) }}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  }

  return (
    <FlatList
      data={[{ title: 'English', value: 'en-US' }, { title: '简体中文', value: 'zh-CN' }]}
      renderItem={renderItem}
    />
  )
}
