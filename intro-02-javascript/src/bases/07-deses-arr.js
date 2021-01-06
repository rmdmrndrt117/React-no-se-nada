const personajes=['goku','vegeta','trunks'];

/*console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);*/
const [ , ,p3]=personajes;

console.log(p3);

const arreglo=()=>{
    return [`abc`,123];
}
const [letras,numeros]=arreglo();
console.table(letras,numeros);
//tarea 
//1.el primer valor del arr se llamara nombre
//2.el segundo se llamara nombre2
const state=(valor)=>{
    return [valor,()=>{console.log('hola mundo')}];
}

//const arr=state('goku');
const [nombre,nombre2]=state('goku');

console.log(nombre);
nombre2();