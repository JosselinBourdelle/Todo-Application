
export const ADD_TODO = 'ADD_TODO';
export const RESET_TODO = 'RESET_TODO';

export function addTodo(name) {
    return {
        type: ADD_TODO,
        name
    }
}

export function resetTodo() {
    return {
        type: RESET_TODO
    }
}