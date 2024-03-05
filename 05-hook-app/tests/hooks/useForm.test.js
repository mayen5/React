import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Carmelo',
    email: 'cmayen@gmail.com',
  };

  test('debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'Estuardo';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    // especificamente para formState propiedad name
    expect(result.current.formState.name).toBe(newValue);
    // para verificar que el objeto formState se haya actualizado, especificamente la propiedad name
    expect(result.current.formState).toEqual({
      ...initialForm,
      name: newValue,
    });
  });

  test('debe de realizar el reset del formulario', () => {
    const newValue = 'Estuardo';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    // especificamente para formState propiedad name
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
