
// Desestructuracion
// Asignacion Desestructurante
const persona = {
    nombre: 'Carmelo',
    edad: 33,
    clave: 'IronMan',
}

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usarContexto = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 90.5236,
            lng: 34.2354
        }
    }

}

const { nombreClave, anios, latlng: {lat, lng }} = usarContexto( persona );

console.log( nombreClave, anios );
console.log( lat, lng );