import React from 'react';
import TodoItem from './component/item'
import { addTodo , deleteTodo , toggleTodo } from '../../actions'
import { connect } from 'react-redux'
import { Text , View , StyleSheet , TextInput , ScrollView , TouchableOpacity } from 'react-native';
 
class Todos extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            todoItem : [] , 
            todoText : ' ' , 
            visibilityFilter : 'SHOW_ALL'
         };
    }

    componentDidMount(){

        let todoItem = this.props.todolist
        let filter = this.props.view

        this.setState({
            todoItem : todoItem , 
            filter : filter 
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.todolist != this.state.todoItem){
            this.setState({
                todoItem : nextProps.todolist
            })
        } else if(nextProps.view != this.state.visibilityFilter) {
            this.setState({
                visibilityFilter : nextProps.view
            })
        }
    }

    changeText = (e) => {

        this.setState({
            todoText : e
        })
       
    }

    toggle = (key) => {

        let dispatch = this.props.dispatch 

        dispatch(toggleTodo(key))
        
    }

    delete = (key) => {

        let dispatch = this.props.dispatch 

        dispatch(deleteTodo(key))
        
    }

    updateTodos = (e) => {

        let dispatch = this.props.dispatch 

        dispatch(addTodo(this.state.todoText))
        this.setState({
            todoText : ''
        })

    }

    render() {

        return (
            <View style={todos.container}>
                <View style={todos.header}>
                    <Text style={todos.headerText}>
                        Todos Apps
                    </Text>
                </View>
                <ScrollView style={todos.innerContainer} keyboardShouldPersistTaps='always'>
                    {
                        this.state.todoItem.map((items , key)=>{
                            return <TodoItem 
                                        Text={items.text} 
                                        time={items.date}
                                        key={key}
                                        index={items.id}
                                        status={(items.completed ? {opacity : 0.5 } : {})}
                                        toggle={ (e) => { this.toggle(items.id) } }
                                        delete={ (e) => { this.delete(items.id) } }
                                    />
                                  
                            
                        })
                    }
                </ScrollView>
                <TextInput
                    style={todos.textInput}
                    value={this.state.todoText}
                    placeholder="add todos" 
                    onChangeText={this.changeText}
                    >
                </TextInput>
                <TouchableOpacity onPress={this.updateTodos} style={todos.addButton}>
                    <Text style={todos.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Todos = connect((store) => {
    return {
        todolist : store.todoReducers , 
        view : store.visibilityFilter
    }
})(Todos)

export default Todos;

export const todos = StyleSheet.create({ 
    container : {
        flex : 1 , 
        flexDirection : 'column' ,
        alignSelf : 'stretch'
    } ,  
    header : {
        alignItems : 'center' , 
        padding : 12 
    } , 
    innerContainer : {
        flex : 8 , 
        padding : 12 , 
        flexDirection : 'column' 
    } , 
    headerText : {
        fontSize : 24 , 
        marginTop  : 12 
    } , 
    textInput : {
        alignSelf : 'stretch' , 
        color : '#141516' , 
        padding : 16 , 
        backgroundColor  : '#E3F2FD' 
    } , 
    addButton : {
        width : 60 , 
        height : 60 , 
        position : 'absolute' , 
        zIndex : 11 , 
        right : 24 , 
        bottom : 88 , 
        backgroundColor : '#1DE9B6' , 
        borderRadius : 50 , 
        alignItems : 'center' , 
        justifyContent : 'center' 
    }, 
    addButtonText : {
        color : 'white' , 
        fontSize : 24
    }
  });