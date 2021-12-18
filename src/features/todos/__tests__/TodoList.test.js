import { render, screen } from '../../../utils/test-utils';
import { mockTodos } from '../mocks';
import TodoList from '../TodoList';

describe('<TodoList />', () => {
    it('renders without crashing', () => {
        render(
            <TodoList todos={mockTodos} />
        );
        
        const todoListItemDesc = screen.getAllByTestId('todo-li');
        expect(todoListItemDesc.length).toBe(mockTodos.length);
    })
})
