import React, { Component } from 'react';
import {TodoListContext} from './TodoListContext'

class TodoForm extends Component {
    constructor (props){
        super(props)

        this.state = {titleText: ''};
        this.inputTextChange = this.inputTextChange.bind(this);
    }
    inputTextChange(event){
        this.setState({titleText: event.target.value})
    }
    render(){
        return (
            <TodoListContext.Consumer>
                    {
                        ({addTodo, resetTodos}) => {
                            return (
                                <>
                                    <h2>TODO FORM :</h2>
                                    <label>title :</label>
                                    <input type='text' value={this.state.titleText} onChange={this.inputTextChange}/>
                                    <input type='submit' value='Ajouter' onClick={() => {addTodo(this.state.titleText)}}/>
                                    <input type='submit' value='reset' onClick={resetTodos}/>
                                </>
                            );
                        }
                    }
            </TodoListContext.Consumer>
        )
    }
}

export default TodoForm;
