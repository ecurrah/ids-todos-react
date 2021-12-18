import { mockTodos, mockIncompleteTodo, mockCompleteTodo } from '../mocks';
import reducer, { getAll, markComplete, markIncomplete } from '../todoSlice';

describe('todoSlice.js', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({list:[]});
    });

    it('should handle populating todos from empty list', () => {
        const previousState = {list: []};
        expect(reducer(previousState, getAll())).toEqual({list: [...mockTodos]});
    });

    it('should handle marking a todo as completed', () => {
        const previousState = { list: [mockIncompleteTodo] };
        let expectedState = {
            list: [{...mockIncompleteTodo, completed: true}]
        };
        expect(reducer(previousState, markComplete(mockIncompleteTodo.id))).toEqual(expectedState);
    });

    it('should handle marking a todo as incomplete', () => {
        const previousState = { list: [mockCompleteTodo] };
        let expectedState = {
            list: [{...mockCompleteTodo, completed: false}]
        };
        expect(reducer(previousState, markIncomplete(mockCompleteTodo.id))).toEqual(expectedState);
    })
})