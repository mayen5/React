import { fireEvent, render, screen } from "@testing-library/react";
import { TodoAdd } from "../../src/08-useReducer/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const newTodo = {
        id: 1,
        description: 'Aprender React',
        done: false
    }

    const onNewTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrarse correctamente el componente', () => {
        render(
            <TodoAdd />
        );

        expect(screen.getByLabelText('formTodoAdd')).toBeTruthy();
        expect(screen.getByLabelText('inputTodoAdd')).toBeTruthy();
        expect(screen.getByLabelText('buttonTodoAdd')).toBeTruthy();
    });

    test('debe de llamar la función onNewTodo en el submit', () => {
        render(
            <TodoAdd onNewTodo={onNewTodoMock} />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('formTodoAdd');

        fireEvent.change(input, { target: { value: newTodo.description } });
        fireEvent.submit(form);

        expect(onNewTodoMock).toHaveBeenCalled();
        expect(onNewTodoMock).toBeTruthy();
    });
});