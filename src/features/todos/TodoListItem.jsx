import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import CheckBox from '../common/CheckBox';
import './TodoListItem.scss';

import { markCompletedAsync, markIncompleteAsync } from './todoSlice';

const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    const [ checked, setChecked ] = useState(todo.completed);

    const toggleComplete = (e, id) => {
        if(e.target.checked){
            setChecked(true);
            dispatch(markCompletedAsync(id));
        } else {
            setChecked(false);
            dispatch(markIncompleteAsync(id));
        }
    }

    return (
        <div className={`todo-li`} key={todo.id} data-testid='todo-li'>
            <span className={`todo-li-field ${checked? 'checked': ''}`}>
                <CheckBox checked={checked} onChange={(e) => toggleComplete(e, todo.id)} />
            </span>
            <span className={`todo-li-field  ${checked? 'checked': ''}`}>
                {todo.description}
            </span>
        </div>
    );
}

export default TodoListItem;