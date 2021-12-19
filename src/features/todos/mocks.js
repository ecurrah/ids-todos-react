
export const mockTodos = [
    {
        id: 1,
        description: 'Test TODO_1',
        completed: false
    },
    {
        id: 2,
        description: 'Test TODO_2',
        completed: false
    },
    {
        id: 3,
        description: 'Test TODO_3',
        completed: true
    },
    {
        id: 4,
        description: 'Test TODO_4',
        completed: false
    },
    {
        id: 5,
        description: 'Test TODO_5',
        completed: false
    },
    {
        id: 6,
        description: 'Test TODO_6',
        completed: true
    },
    {
        id: 7,
        description: 'Test TODO_7',
        completed: false
    },
    {
        id: 8,
        description: 'Test TODO_8',
        completed: true
    },
    {
        id: 9,
        description: 'Test TODO_9',
        completed: true
    },
    {
        id: 10,
        description: 'Test TODO_10',
        completed: false
    },
    {
        id: 11,
        description: 'Test TODO_11',
        completed: false
    },
    {
        id: 12,
        description: 'Test TODO_12',
        completed: false
    },
    {
        id: 13,
        description: 'Test TODO_13',
        completed: true
    },
    {
        id: 14,
        description: 'Test TODO_14',
        completed: false
    },
];

export const mockCompletedTodos = mockTodos.filter(todo => todo.completed === true);
export const mockIncompleteTodos = mockTodos.filter(todo => todo.completed === false);

export const mockTodo = mockTodos[0];
export const mockIncompleteTodo = mockTodos.find(todo => todo.completed === false);
export const mockCompleteTodo = mockTodos.find(todo => todo.completed === true);
