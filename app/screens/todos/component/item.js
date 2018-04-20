import React from 'react';
import { Text , View , StyleSheet , TouchableOpacity , TouchableHighlight } from 'react-native';


const TodoItem = (props) => {
    return (
        <TouchableOpacity onPress={props.toggle}>
            <View style={[Item.styles , props.status ]} > 
                <Text style={[Item.text , Item.big]}>{props.Text}</Text>
                <Text style={Item.text}>{props.time}</Text>

                <TouchableOpacity style={Item.deleteButton} onPress={props.delete}>
                    <Text style={ Item.deleteButtonText} >-</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

const Item = StyleSheet.create({
    styles : {
        alignSelf : 'stretch' , 
        padding : 12 ,
        borderRadius : 4 , 
        backgroundColor : '#009688' ,
        marginBottom : 12 , 
        position : 'relative'
    } , 
    text : {
        color : 'white'
    } , 
    big : {
        fontSize : 18   
    } , 
    deleteButton : {
        position : 'absolute' , 
        right : 12 , 
        top : 50 ,
        width : 40 , 
        height : 40 , 
        transform  : [{translateY :  -30 }] , 
        borderRadius : 50 , 
        backgroundColor : '#E91E63' , 
        alignItems : 'center' , 
        justifyContent : 'center' 
    } , 
    deleteButtonText : {
        color : 'white'
    } , 
    complete : {
        opacity : 0.5
    }
 })

export default TodoItem;