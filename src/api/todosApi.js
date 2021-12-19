import { mockTodos } from "../features/todos/mocks";

const mockDelayMS = 500;

export const  fetchTodos = () => {
    return new Promise(resolve => setTimeout(resolve({todos: [...mockTodos]}), mockDelayMS));
}

export const saveNewTodo = (newTodo) => {
    return new Promise(resolve => setTimeout(() => {
        resolve({todo: newTodo})
    }, mockDelayMS)
    );
}

export const markCompleted = (id) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            try {
                const todo = mockTodos.find(todo => todo.id === id); // taking from mocks here but need to take from backend
                let updatedTodo = {...todo};
                updatedTodo.completed = true;
                resolve({todo: updatedTodo});
            } catch (error) {
                reject(error);
            }
        }, mockDelayMS)
    );
}

export const markIncomplete = (id) => {
    return new Promise(resolve =>
        setTimeout(() => {
            const todo = mockTodos.find(todo => todo.id === id); // taking from mocks here but need to take from backend
            let updatedTodo = {...todo};
            updatedTodo.completed = false;
            resolve({todo: updatedTodo});
        }, mockDelayMS)
    );
}