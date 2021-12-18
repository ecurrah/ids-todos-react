import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import todoReducer from '../features/todos/todoSlice';

const render = ( 
    ui, 
    {
        preloadedState,
        store = configureStore({reducer: { todos: todoReducer }, preloadedState }),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
    return rtlRender( ui, {wrapper: Wrapper, ...renderOptions });
}

// export all the same functions available with react-testing-library
export * from '@testing-library/react';
export { render }