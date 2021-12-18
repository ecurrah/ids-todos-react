import React, { useState } from 'react';
import { mockTodos } from '../../features/todos/mocks';
import HomePage from './HomePage';

const HomePageContainer = () => {
    const [activeTab, setActiveTab] = useState('INCOMPLETE');

    return (
        <HomePage 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            todos={mockTodos.filter(todo => todo.completed === (activeTab === "COMPLETED"))} 
        />
    )
}

export default HomePageContainer;