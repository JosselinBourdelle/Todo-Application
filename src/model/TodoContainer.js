import React, { Component } from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'


class TodoContainer extends Component {
    constructor (props){
        super(props)

        
    }
    render(){
        return (
            <>
                <TodoForm addTODO={this.addTODO} resetTodos = {this.resetTodos}/>
                <TodoList todos={this.state.todos}/>
            </>
        );
    }
}

export default TodoContainer;