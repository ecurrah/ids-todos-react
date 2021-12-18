import { createSlice } from '@reduxjs/toolkit';
import { mockTodos } from './mocks';

const initialState = { list: [] };

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getAll: (state) => {
            state.list.length = 0;
            mockTodos.forEach(todo => {
                state.list.push(todo);
            });// TODO: update this to fetch ToDos from backend
        },
        clearAll: (state) => {
            state.list.length = 0;
        },
        markComplete: (state, action) => {
            const todo = state.list.find(todo => todo.id === action.payload);
            todo.completed = true;
        },
        markIncomplete: (state, action) => {
            const todo = state.list.find(todo => todo.id === action.payload);
            todo.completed = false;
        },
    },
})

export const { getAll, clearAll, markComplete, markIncomplete } = todoSlice.actions;

export default todoSlice.reducer;
