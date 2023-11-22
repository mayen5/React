import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        //const { images, isLoading } = useFetchGifs();
    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        await waitFor(
            () => {
                expect( result.current.images.length ).toBeGreaterThan(0);
                expect( result.current.isLoading ).toBeFalsy();
            }
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});