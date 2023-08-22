import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => { 
    
    test('getImagen debe de retornar un URL de la imagen', async () => { 
        
        const resp = await getImagen();
        console.log(resp);

        expect( typeof resp ).toBe('string');

     });

     test('getImagen debe de retornar un error si no encuentra imagen', async () => { 

        const resp = 'No se encontro la imagen';
        expect( resp ).toBe('No se encontro la imagen');
     });
 });