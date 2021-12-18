import { render, screen } from '@testing-library/react';
import { mockTodo } from '../mocks';
import TodoListItem from '../TodoListItem';

describe('<TodoListItem />', () => {
    it('renders without crashing', () => {
        render(
            <TodoListItem todo={mockTodo} />
        );
        
        const todoListItemDesc = screen.getByText(mockTodo.description);
        expect(todoListItemDesc).toBeInTheDocument();
    })
})
