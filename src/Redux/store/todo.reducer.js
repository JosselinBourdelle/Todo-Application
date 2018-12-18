import {ADD_TODO, RESET_TODO} from './todo.action';

export const todoList = [{
    id: 1,
    title: 'send a mail',
    isDone: false
}];

export const initialState = {
    list : todoList,
};

export function todosReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(' addtodo : ',action);
            const todo = {
                id: state.list.length + 1,
                title: action.name,
                isDone: false
            }
            return {
                ...state,
                list: [...state.list, todo],
            }
        case RESET_TODO:
            return {
                ...state,
                list: [],
            }
        default :
            return state;
    }
}