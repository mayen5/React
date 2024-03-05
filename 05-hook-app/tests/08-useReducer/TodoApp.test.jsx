import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Aprender React',
                done: true
            },
            {
                id: 2,
                description: 'Aprender Mongo',
                done: false
            },
            {
                id: 3,
                description: 'Aprender Node',
                done: false
            }
        ],
        todosCount: 3,
        pendingTodosCount: 2,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('debe de mostrarse el componente correctamente', () => {

        render(
            <TodoApp />
        );
        // screen.debug();
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();
        expect(screen.getByText('Aprender Node')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();


    });
});