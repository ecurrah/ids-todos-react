import React from 'react';
import Layout from '../../features/common/Layout';
import TodoList from '../../features/todos/TodoList';
import { FaList, FaRegCalendarCheck } from 'react-icons/fa';
import './HomePage.css';

const HomePage = ({activeTab, setActiveTab, todos}) => {
    const leftActive = activeTab === 'INCOMPLETE';
    const rightActive = activeTab === 'COMPLETED';

    return (
        <Layout>
            <div data-testid='home-page' className={`home-page-container`}>
                <div className={`tab-container`}>
                    <span 
                        data-testid='tab-left' 
                        className={`tab left ${leftActive && 'active'}`}
                        onClick={() => setActiveTab('INCOMPLETE')}
                    >
                        <FaList size={35} className={`tab-icon ${leftActive && 'active'}`} />
                    </span>
                    <span 
                        data-testid='tab-right' 
                        className={`tab right ${rightActive && 'active'}`}
                        onClick={() => setActiveTab('COMPLETED')}
                    >
                        <FaRegCalendarCheck size={35} className={`tab-icon ${rightActive && 'active'}`} />
                    </span>
                </div>
                <div className={`home-page-content`}>
                        <TodoList todos={todos} />
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;