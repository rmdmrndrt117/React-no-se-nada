//Desestructuración de Arreglos

const personajes = ['Goku','Vegeta','Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras,numero] = retornaArreglo();

console.log(letras,numero);

//Tarea
//1. el primer valor del arreglo se llamará nombre
//2. se llamará obtenerNombre
const state = ( valor ) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

//const arr = state('Goku');

const [nombre,obtenerNombre] = state('Goku');

console.log( nombre );
obtenerNombre();