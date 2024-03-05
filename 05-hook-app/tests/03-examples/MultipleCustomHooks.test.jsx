import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mockReset = jest.fn();
    useCounter.mockReturnValue({
        state: 0,
        increment: mockIncrement,
        decrement: mockDecrement,
        reset: mockReset
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(
            <MultipleCustomHooks />
        );

        expect(screen.getByText('Custom Hooks'));
        expect(screen.getByText('Loading...'));

        const resetButton = screen.getByRole('button', { name: 'Reset' });
        expect(resetButton.disabled).toBeTruthy();
    });

    test('debe de mostrar la información', async () => {

        useFetch.mockReturnValue({
            data: {
                title: 'Daenerys Targaryen',
                fullName: 'Daenerys Targaryen',
                family: 'House Targaryen',
                imageUrl: 'https://thronesapi.com/static/daenerys.jpg'
            },
            isLoading: false,
            hasError: null
        });

        render(
            <MultipleCustomHooks />
        );

        expect(screen.getAllByText('Daenerys Targaryen')).toBeTruthy();
        expect(screen.getByText('House Targaryen')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Character' });
        expect(nextButton).toBeTruthy();
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la función incrementar', () => {
        useFetch.mockReturnValue({
            data: {
                title: 'Daenerys Targaryen',
                fullName: 'Daenerys Targaryen',
                family: 'House Targaryen',
                imageUrl: 'https://thronesapi.com/static/daenerys.jpg'
            },
            isLoading: false,
            hasError: null
        });

        render(
            <MultipleCustomHooks />
        );

        const nextButton = screen.getByRole('button', { name: 'Next Character' });
        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalled();
    });

    test('debe de llamar la función decrementar', () => {
        useFetch.mockReturnValue({
            data: {
                title: 'Daenerys Targaryen',
                fullName: 'Daenerys Targaryen',
                family: 'House Targaryen',
                imageUrl: 'https://thronesapi.com/static/daenerys.jpg'
            },
            isLoading: false,
            hasError: null
        });

        render(
            <MultipleCustomHooks />
        );

        const previousButton = screen.getByRole('button', { name: 'Previous Character' });
        fireEvent.click(previousButton);
        expect(mockDecrement).toHaveBeenCalled();
    });

    test('debe de llamar la función reset', () => {
        useFetch.mockReturnValue({
            data: {
                title: 'Daenerys Targaryen',
                fullName: 'Daenerys Targaryen',
                family: 'House Targaryen',
                imageUrl: 'https://thronesapi.com/static/daenerys.jpg'
            },
            isLoading: false,
            hasError: null
        });

        render(
            <MultipleCustomHooks />
        );

        const resetButton = screen.getByRole('button', { name: 'Reset' });
        fireEvent.click(resetButton);
        expect(mockReset).toHaveBeenCalled();
    });
});