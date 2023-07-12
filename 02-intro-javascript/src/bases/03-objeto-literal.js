

const persona = {
    nombre: 'Carmelo',
    apellido: 'Mayen',
    edad: 33,
    direccion: {
        ciudad: 'Guatemala',
        zip: '01001',
        lat: 90.2356,
        lng: 34.9311,
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Estuardo';

console.log( persona );
console.log(persona2);