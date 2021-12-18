import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../../features/todos/todoSlice';
import HomePage from './HomePage';

const HomePageContainer = () => {
    const [activeTab, setActiveTab] = useState('INCOMPLETE');
    const dispatch = useDispatch();
    const todos = useSelector((state) => activeTab === 'COMPLETED' ? state.todos.list.filter(todo => todo.completed) : state.todos.list.filter(todo => !todo.completed));

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    return (
        <HomePage 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            todos={todos} 
        />
    )
}

export default HomePageContainer;