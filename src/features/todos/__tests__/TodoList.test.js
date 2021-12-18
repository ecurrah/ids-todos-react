import { render, screen } from '@testing-library/react';
import { mockTodos } from '../mocks';
import TodoList from '../TodoList';

describe('<TodoList />', () => {
    it('renders without crashing', () => {
        render(
            <TodoList todos={mockTodos} />
        );
        
        const todoListItemDesc = screen.getAllByTestId('todo-listitem');
        expect(todoListItemDesc.length).toBe(mockTodos.length);
    })
})
