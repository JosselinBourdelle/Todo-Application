import React, { Component } from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'


class TodoContainer extends Component {
    constructor (props){
        super(props)

        this.addTODO = this.addTODO.bind(this);
        this.resetTodos = this.resetTodos.bind(this);
        this.state = {todos: []}
    }
    componentDidUpdate(){
        console.log(this.state.todos)
    }
    addTODO(title){
        this.setState({todos:[...this.state.todos,{title: title, isDone: false}]})
    }
    resetTodos(){
        this.setState({todos: []})
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