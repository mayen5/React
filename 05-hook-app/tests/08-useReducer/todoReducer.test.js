import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Aprender React',
      done: false,
    },
    {
      id: 2,
      description: 'Aprender Mongo',
      done: false,
    },
  ];

  test('debe de retornar el estado por defecto', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un TODO', () => {
    const newTodo = {
      id: 3,
      description: 'Aprender Node',
      done: false,
    };

    const action = {
      type: '[TODO] Add Todo',
      payload: newTodo,
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual([...initialState, newTodo]);
    expect(newState).not.toBe(initialState);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un TODO', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 2,
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual([initialState[0]]);
    expect(newState.length).toBe(1);
    expect(newState).not.toContain(initialState[1]);
  });

  test('debe de hacer el TOGGLE del TODO', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
    expect(newState[1]).toEqual(initialState[1]);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
