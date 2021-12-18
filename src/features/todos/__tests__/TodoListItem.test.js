import { render, screen, fireEvent } from '../../../utils/test-utils';
import { mockIncompleteTodo, mockTodo } from '../mocks';
import TodoListItem from '../TodoListItem';

describe('<TodoListItem />', () => {
    it('renders without crashing', () => {
        render(
            <TodoListItem todo={mockTodo} />
        );
        
        const todoListItemDesc = screen.getByText(mockTodo.description);
        expect(todoListItemDesc).toBeInTheDocument();
    })

    it('updates todo when checkbox is checked', () => {
        render(
            <TodoListItem todo={mockIncompleteTodo} />
        );

        const todoListItemCheckBox = screen.getByTestId('todo-li-chbx');
        expect(todoListItemCheckBox.checked).toBe(false);
        fireEvent.change(todoListItemCheckBox, {target: {checked: true}});
        expect(todoListItemCheckBox.checked).toBe(true);
    })
})
