import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter Test', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { state, increment, decrement, reset } = result.current;

    expect(state).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { state } = result.current;

    expect(state).toBe(100);
  });

  test('debe incrementar el state', () => {
    const { result } = renderHook(() => useCounter(10));
    const { state, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.state).toBe(13);
  });

  test('debe decrementar el state', () => {
    const { result } = renderHook(() => useCounter());
    const { state, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.state).toBe(7);
  });

  test('debe resetear el valor del state', () => {
    const { result } = renderHook(() => useCounter());
    const { state, reset, increment, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
      increment(10);
      reset();
    });

    expect(result.current.state).toBe(10);
  });
});
