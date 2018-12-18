import React, { Component } from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'
import {TodoListContext, todos, addTodo, resetTodos} from './TodoListContext'

class TodoContainer extends Component {
    constructor (props){
        super(props)

        this.state = {
            todos,
            addTodo,
            resetTodos
        }
    }
    componentDidMount(){
        this.setState({
            addTodo: (title) => {
                this.setState({todos: [...this.state.todos, {key: title, title: title, isDone: false}]})
                console.log(this.state.todos);
        },  resetTodos: () => {
            this.setState({todos: []})
        }});
    }
    render(){
        return (
            <TodoListContext.Provider value={this.state}>
                <TodoForm/>
                <TodoList/>
            </TodoListContext.Provider>
        );
    }
}

export default TodoContainer;