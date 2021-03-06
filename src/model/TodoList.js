import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const todos = (this.props.todos.map(todo => {
            return <Todo title={todo.title} isDone={todo.isDone} />
        }))
        console.log(todos);
        const elem = todos.length == 0 ? (
            <h4>list empty</h4>
        ) : (
            todos
        )
        return (
            <>
                <h2>TODO LIST :</h2>
                <ul>
                    {elem}
                </ul>
            </>
        );
    }
}

export default TodoList