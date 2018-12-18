import React, { Component } from 'react';
import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import '../App.css';
import {todosReducer} from '../Redux/store/todo.reducer';

const reducers = combineReducers({
    todos: todosReducer,
});
const logger = createLogger({
    level: 'log',
});
const store = createStore(reducers, applyMiddleware(logger));

class TodoContainer extends Component {
    render(){
        return (
            <Provider store={store}>
                <TodoForm />
                <TodoList />
            </Provider>
        );
    }
}

export default TodoContainer;