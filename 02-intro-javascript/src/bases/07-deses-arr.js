

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arreglo se llamara nombre
// 2. el segundo valor del arreglo se llamara setNombre
const usarEstado = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [ nombre, setNombre ] = usarEstado( 'Goku' );

console.log(nombre);
setNombre();