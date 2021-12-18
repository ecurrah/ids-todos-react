import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({todo}) => {
    return (
        <div className={`todo-li`} data-testid='todo-listitem' key={todo.id}>
            <span className={`todo-li-field`}>
                <input type="checkbox" checked={todo.completed} onChange={() => {/* TODO: Implement logic for updating todo */}} />
            </span>
            <span className={`todo-li-field`}>
                {todo.description}
            </span>
        </div>
    );
}

export default TodoListItem;