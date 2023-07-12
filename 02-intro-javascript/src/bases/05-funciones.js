
// Funciones en JS
// const saludar = function ( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = ( nombre ) => `Hola Mundo`;

// console.log( saludar('Goku') );

console.log( saludar2('Carmelo') );
console.log( saludar3('Estuardo') );
console.log( saludar4() );


const getUser = () => ({
    uid: 'ABC123',
    username: 'mayen5'
});


const user = getUser();
console.log(user);

// Tarea

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre   
});

const usuarioActivo = getUsuarioActivo('Carmelo');
console.log( usuarioActivo );