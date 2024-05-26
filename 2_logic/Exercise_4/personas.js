let personas =
    [
        {
            nombre: "Maria",
            apellido: "Armijos",
            edad: 18,
            genero: "Femenino",
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
let menorEdad=0;
    for (let i = 0; i < personas.length; i++) {
       console.log(personas[i].nombre);
       if(personas[i].edad < 18){
        menorEdad++;
       }
        
    }

console.log('Los menores de edad son: '+menorEdad);