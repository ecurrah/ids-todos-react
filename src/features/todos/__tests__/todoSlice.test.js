import { mockTodos } from '../mocks';
import reducer, { clearAll } from '../todoSlice';

describe('todoSlice.js', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({entities:[]});
    });

    it('should clear entities from previous state', async () => {
        const previousState = {entities: mockTodos};
        expect(reducer(previousState, clearAll())).toEqual({entities: []});
    });
})