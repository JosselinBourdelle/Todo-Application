import React, { Component } from 'react';
import Todo from './Todo.js'
import {TodoListContext} from './TodoListContext'

class TodoList extends Component {
    constructor(props){
        super(props)
    }
    returnList(todos){
        const todoList = (todos.map(todo => {
            return <Todo key={todo.title} title={todo.title} isDone={todo.isDone} />
        }))
        console.log(todoList);
        const elem = todoList.length == 0 ? (
            <h4>list empty</h4>
        ) : (
            todoList
        )
        return elem;
    }
    render(){
        return (
            <TodoListContext.Consumer>
                {
                    ({todos}) => {
                        return (
                            <>
                                <h2>TODO LIST :</h2>
                                <ul>
                                    {this.returnList(todos)}
                                </ul>
                            </>
                        )
                    }
                }
            </TodoListContext.Consumer>
        );
    }
}

export default TodoList