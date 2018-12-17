import React, { Component } from 'react';

export const todos = [
    {
        title: "send a mail",
        isDone: false
    }
];

export const addTodo = (title) => {
    todos.push({title: title, isDone: false});
}

export const TodoListContext = React.createContext({
    todoList: todos,
    addTodo: addTodo
});