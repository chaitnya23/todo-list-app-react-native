import React, { useContext } from 'react'
import { View ,Text, FlatList } from 'react-native'
import { AppContext } from '../context/ListContext'
import DoneTodoBox from '../components/done-todo-box';


export default function Done() {

  const {doneTodos} = useContext(AppContext)  ;

  return (
    <View>
    <FlatList data={doneTodos} renderItem={({item})=><DoneTodoBox {...item}/>} keyExtractor={item => item.id}/>
    </View>
  )
}
