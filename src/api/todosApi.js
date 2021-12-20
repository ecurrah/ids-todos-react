import  {getDatabase, ref, onValue, update, push} from 'firebase/database';

export const fetchTodos = () => {
    return new Promise(resolve => {
        const db = getDatabase();
        const todoListRef = ref(db, 'todos/');
        let todoList = [];
        onValue(todoListRef, (snapshot) => {
            const todos = snapshot.val();
            for (let id in todos){
                todoList.push({
                    id: id,
                    description: todos[id].description,
                    completed: todos[id].completed
                });
            }

            const response = resolve({todos: [...todoList]});
            return response;
        },
        {
            onlyOnce: true
        });
    })
    
}

export const saveNewTodo = (desc) => {
    return new Promise ((resolve, reject) => {
        const db = getDatabase();

        const newTodo = {
            description: desc,
            completed: false
        };

        push(ref(db, `todos/`), newTodo).then(result => {
            // saved successfully
            console.log(result)
            resolve({todo: {...newTodo, id: result.key}});
        }).catch((error) => {
            reject(error);
        });
    });
}

export const markCompleted = (id) => {
    return new Promise((resolve, reject) => {
        const db = getDatabase();

        const updates = {};
        updates[`/todos/${id}/completed`] = true;
        update(ref(db), updates).then(() => {
            // successfully updated
            resolve(id);
        }).catch((error) => {
            reject(error);
        })
    });
}

export const markIncomplete = (id) => {
    return new Promise((resolve, reject) => {
        const db = getDatabase();

        const updates = {};
        updates[`/todos/${id}/completed`] = false;
        update(ref(db), updates).then(() => {
            // successfully updated
            resolve(id);
        }).catch((error) => {
            reject(error);
        })
    });
}