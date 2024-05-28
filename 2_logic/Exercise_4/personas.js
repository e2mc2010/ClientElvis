let personas =
    [
        {
            nombre: "Mario",
            apellido: "Armijos",
            edad: 18,
            genero: "Masculino",
            telefono: {
                marca: 'sanmsung',
                color: 'negro'
            }
        },
        {
            nombre: "Pedro",
            apellido: "Armijos",
            edad: 25,
            genero: "Masculino"
        },
        {
            nombre: "Laura",
            apellido: "Benitez",
            edad: 18,
            genero: "Femenino"
        },
        {
            nombre: "Carlos",
            apellido: "Montaño",
            edad: 15,
            genero: "Masculino"
        },
        {
            nombre: "Marta",
            apellido: "Calva",
            edad: 18,
            genero: "Femenino"
        },
        {
            nombre: "Luis",
            apellido: "Cabrera",
            edad: 13,
            genero: "Masculino"
        },
    ]
/*let generoMasculino = 0;
let generoFemenino = 0;
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre);
    if (personas[i].genero == 'Masculino') {
        generoMasculino++;
    }
    else generoFemenino++;

}

console.log('Genero Masculino: ' + generoMasculino);
console.log('Genero Femenino: ' + generoFemenino);*/
/*const findPerson = personas.find((persona) =>
    persona.nombre == 'Mario'

)
console.log(findPerson);*/


let masculinos = personas.filter(persona => persona.genero == 'Masculino');
let femeninos = personas.filter(persona => persona.genero == 'Femenino');

console.log('Masculinos:', masculinos);
console.log('Femeninos:', femeninos);


Math



