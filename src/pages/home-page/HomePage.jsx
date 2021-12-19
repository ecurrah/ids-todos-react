import React from 'react';
import Layout from '../../features/common/Layout';
import TodoList from '../../features/todos/TodoList';
import { FaList, FaRegCalendarCheck, FaPlus } from 'react-icons/fa';
import './HomePage.scss';

const HomePage = ({activeTab, setActiveTab, todos, newTodoDesc, setNewTodoDesc, createButtonOnClick, todoInputOpen, todoInputOnSubmit }) => {
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
                <div className={`home-create-button`}>
                    <div className={`create-button`} onClick={(e) => createButtonOnClick(e)}>
                        <FaPlus size={35} color='white' className={`create-button-icon`} />
                    </div>
                </div>
                {
                    todoInputOpen && 
                    <div className={`home-page-create-container`}>
                        <form onSubmit={e => todoInputOnSubmit(e)}>
                            <input autoFocus type='text' placeholder='Type a description and press Enter...' value={newTodoDesc} onChange={(e) => setNewTodoDesc(e.target.value)} />
                        </form>
                    </div>
                }
            </div>
        </Layout>
    );
}

export default HomePage;