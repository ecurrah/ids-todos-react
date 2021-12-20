import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosAsync, saveNewTodoAsync } from '../../features/todos/todoSlice';
import HomePage from './HomePage';

const HomePageContainer = () => {
    const [activeTab, setActiveTab] = useState('INCOMPLETE');
    const [todoInputOpen, setTodoInputOpen] = useState(false);
    const [newTodoDesc, setNewTodoDesc] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => activeTab === 'COMPLETED' ? state.todos.entities.filter(todo => todo.completed) : state.todos.entities.filter(todo => !todo.completed));

    const createTodo = e => {
        e.preventDefault();
        if(newTodoDesc){
            // only create todo if description has been entered
            dispatch(saveNewTodoAsync(newTodoDesc));
        }
        
        setNewTodoDesc('');
        setTodoInputOpen(false);
        setActiveTab('INCOMPLETE');
    }

    const toggleTodoInput = () => {
        setTodoInputOpen(!todoInputOpen)
    }

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch]);

    return (
        <HomePage 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            newTodoDesc={newTodoDesc}
            setNewTodoDesc={setNewTodoDesc}
            createButtonOnClick={toggleTodoInput}
            todoInputOnSubmit={createTodo}
            todoInputOpen={todoInputOpen}
            setTodoDescInputOpen={setTodoInputOpen}
            todos={todos} 
        />
    )
}

export default HomePageContainer;