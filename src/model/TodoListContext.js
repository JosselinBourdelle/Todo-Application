import React, { Component } from 'react';

export let todos = [
    {
        title: "send a mail",
        isDone: false
    }
];

export const addTodo = (title) => {}

export const resetTodos = () => {}

export const TodoListContext = React.createContext({
    todos,
    addTodo,
    resetTodos
});