import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, Button, Pressable, FlatList } from 'react-native'
import TodoBox from '../components/todo-box'
import Task from '../components/task'
import { AppContext } from '../context/ListContext';

export default function Todos() {

    const [showTaskInput, setshowTaskInput] = useState(false);
    const {myTodos} = useContext(AppContext);
    
    return (
        <View style={styles.body}> 

            <FlatList data={myTodos} renderItem={({item})=><TodoBox {...item}/>} keyExtractor={item => item.id}/>

            <Pressable style={styles.addBtn} onPress={()=>{
                setshowTaskInput(true);
            }}>
                <Text style={{fontSize:30 ,color:"#fff"}}>+</Text>
            </Pressable>

            {showTaskInput && <Task cancel={()=>setshowTaskInput(false)}/>}
        </View>
    )
}


const styles = StyleSheet.create({

    body: {
        flex: 1
    },
    addBtn: {
        backgroundColor: "#0080ff",
        width: 50,
        height: 50,
        borderRadius: 30,
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom: 25,
        right: 25
    }

})

