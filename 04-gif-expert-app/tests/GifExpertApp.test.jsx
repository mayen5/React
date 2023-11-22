import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp/>', () => {

    test('debe de mostrar el componente correctamente', () => {
        render(<GifExpertApp />);
        //screen.debug();

        const title = screen.getByText('GifExpertApp');
        expect(title);

    });
    
});