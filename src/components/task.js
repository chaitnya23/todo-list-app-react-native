import React, { useContext, useState } from 'react'
import { View, TextInput, Text, Button, StyleSheet, Pressable } from 'react-native'
import { AppContext } from '../context/ListContext';

export default function Task({cancel}) {

    const [taskState, settaskState] = useState({title:"" ,description:"" ,id:""});
    const {myTodos ,setmyTodos} = useContext(AppContext);

    // console.warn(myTodos);
    const create = ()=>{

        if(taskState.title=="" || taskState.description=="") {
            console.warn("please fill correctly");
            return;
        }

        setmyTodos([...myTodos ,{...taskState ,id:myTodos.length+1}]);
        cancel();
    }

    return (
        <View style={styles.container}>
            <View style={styles.model}>

                <TextInput style={styles.input} value={taskState.title} onChangeText={(val)=>settaskState({...taskState ,title:val})} placeholder='Enter the task Title' />
                <TextInput style={styles.input} value={taskState.description} onChangeText={(val)=>settaskState({...taskState ,description:val})} placeholder='Enter the task description' />



                <View style={{ marginTop: 40 }}>
                    <Button title='Create task' onPress={create}/>
                    <Pressable style={styles.cancelBtn} onPress={cancel}>
                        <Text style={{ fontSize: 20, textAlign: "center", padding: 5, color: "#fff" }}>Cancel</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "rgba(50,50,50,.6)",
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        right: 0,
        left: 0
    },
    model: {
        height: 300,
        padding: 10,
        borderRadius: 10,
        width: 300,
        elevation: 5,
        backgroundColor: "#fff"
    },
    cancelBtn: {
        backgroundColor: "red",
        marginTop: 15
    },
    input: {
        padding: 8,
        marginTop: 18,
        borderBottomWidth: 2,
        fontSize: 16
    }


})