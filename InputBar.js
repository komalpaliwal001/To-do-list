import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';

const InputBar = (props) => {
    return(
        <View style = {StyleSheet.inputContainer}>
            <TextInput 
                style = {StyleSheet.input}
                onChangeText = {(todoInput)=> this.props.textChange(todoInput)}
                value = {props.todoInput}
            />
            <TouchableOpacity
             style = {styles.addButton}
             onPress = {this.props.addNewTodo}
            >
                <Text style = {styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        shadowOffset: { width: 0 ,height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input:{
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35,
    },
    addButton: {
        width: 100,
        height: 40,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default InputBar;