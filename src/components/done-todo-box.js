import React from 'react'
import { View, Text, StyleSheet ,Pressable } from 'react-native'
import { TickIcon } from '../svgs'

export default function DoneTodoBox({title ,description}) {

  return (
    <View style={styles.main}>
    <Pressable style={styles.tickIcon} >
    <TickIcon />
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
    tickIcon: {
        position: 'absolute',
        right: 10,
        top: 10
      }
  })