import React, { useContext } from 'react'
import { View, Text, StyleSheet ,Pressable } from 'react-native'
import { DeleteIcon } from '../svgs'
import { AppContext } from '../context/ListContext'

export default function TodoBox({ title, description ,id }) {

  const {setmyTodos ,myTodos ,doneTodos ,setdoneTodos} = useContext(AppContext);

  const removeTask = (id)=>{

    setmyTodos(myTodos.filter((item)=>{
      return item.id!=id;
    }))

    setdoneTodos( [...doneTodos ,{title ,id ,description}]);
  }

  return (
    <View style={styles.main}>

      <Pressable style={styles.deleteIcon} onPress={()=>removeTask(id)}>
        <DeleteIcon />
      </Pressable>
      <Text style={styles.title}> {title}</Text>
      <Text style={styles.body}> {description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    // borderWidth:.3,
    paddingVertical: 25,
    borderLeftWidth: 3,
    paddingHorizontal: 25,
    backgroundColor: "white",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 }

  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: "black"
  },
  body: {
    marginTop: 15,
    fontWeight: '400',
    fontSize: 15,
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  }
})