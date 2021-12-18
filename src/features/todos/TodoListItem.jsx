import React from 'react';
import { useDispatch } from 'react-redux';
import './TodoListItem.css';

import { markComplete, markIncomplete } from './todoSlice';

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();

    const toggleComplete = (e, id) => {
        if(e.target.checked){
            dispatch(markComplete(id));
        } else {
            dispatch(markIncomplete(id));
        }
    }

    return (
        <div className={`todo-li`} key={todo.id} data-testid='todo-li'>
            <span className={`todo-li-field`}>
                <input type="checkbox" checked={todo.completed} onChange={(e) => toggleComplete(e, todo.id)} data-testid='todo-li-chbx' />
            </span>
            <span className={`todo-li-field`}>
                {todo.description}
            </span>
        </div>
    );
}

export default TodoListItem;