import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as todosApi from '../../api/todosApi';

const initialState = { entities: [] };

export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async (input, {rejectWithValue}) => {
    try {
        const response = await todosApi.fetchTodos();
        return response.todos;
    } catch (error) {
        rejectWithValue('Request to fetch ToDos failed');
    }
})

export const saveNewTodoAsync = createAsyncThunk('todos/saveNewTodo', async (newTodo, {rejectWithValue}) => {
    try {
        const response = await todosApi.saveNewTodo(newTodo);
        return response.todo;
    } catch (error) {
        rejectWithValue('Request to create new ToDo failed');
    }
});

export const markCompletedAsync = createAsyncThunk('todos/markCompleted', async (id, {rejectWithValue}) => {
    console.log('markCompletedAsync started')
    try {
        const response = await todosApi.markCompleted(id);
        return response.todo;
    } catch (error) {
        console.log(error);
        rejectWithValue(id);
    }
});

export const markIncompleteAsync = createAsyncThunk('todos/markIncomplete', async (id, {rejectWithValue}) => {
    try {
        const response = await todosApi.markIncomplete(id);
        return response.todo;
    } catch (error) {
        rejectWithValue(id);
    }
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Modern Redux: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
        // Here "mutating" code is ok inside of createSlice as this uses a library calld Immer to tracks the updates and return an immutably updated value
        // Can instead optionally return an immutably updated value directly
        //      Example:
        //          let updatedTodos = [...state.entities];
        //          // perform updates
        //          return {entities: [...updatedTodos]};
        clearAll: (state) => {
            state.entities.length = 0;
        },
    },
    extraReducers: builder => {
        builder
        /** Fetch ToDos **/
        .addCase(fetchTodosAsync.pending, (state, action) => {
            //console.log('Fetching Todos... ', action);
        })
        .addCase(fetchTodosAsync.fulfilled, (state, action) => {
            //console.log('Successfully fetched Todos: ', action);

            const newEntities = [];
            action.payload.forEach(todo => {
                newEntities.push(todo);
            });
            state.entities = newEntities;
        })
        .addCase(fetchTodosAsync.rejected, (state, action) => {
            //console.log('fetchTodosAsync rejected: ', action);
        })
        /** Save New ToDo **/
        .addCase(saveNewTodoAsync.pending, (state, action) => {
            console.log('Creating Todo... ', action);
        })
        .addCase (saveNewTodoAsync.fulfilled, (state, action) => {
            console.log('Successfully created Todo: ', action);
            state.entities.push(action.payload);
        })
        .addCase (saveNewTodoAsync.rejected, (state, action) => {
            console.log('saveNewTodoAsync rejected: ', action);
        })
        /**  Mark ToDo Completed **/
        .addCase(markCompletedAsync.pending, (state, action) => {
            //console.log('Marking Todo Complete... ', action);
        })
        .addCase (markCompletedAsync.fulfilled, (state, action) => {
            //console.log('Successfully Marked Todo Completed: ', action);
            const todo = state.entities.find(todo => todo.id === action.payload.id)
            todo.completed = true;
        })
        .addCase (markCompletedAsync.rejected, (state, action) => {
            //console.log('markCompleteAsync rejected: ', action);
        })
        /**  MARK TODO INCOMPLETE **/
        .addCase(markIncompleteAsync.pending, (state, action) => {
            //console.log('Marking Todo Incomplete... ', action);
        })
        .addCase (markIncompleteAsync.fulfilled, (state, action) => {
            //console.log('Successfully Marked Todo Incomplete: ', action);
            const todo = state.entities.find(todo => todo.id === action.payload.id)
            todo.completed = false;
        })
        .addCase (markIncompleteAsync.rejected, (state, action) => {
            //console.log('markIncompleteAsync rejected: ', action);
        })
    }
})

export const { clearAll } = todoSlice.actions;

export default todoSlice.reducer;
