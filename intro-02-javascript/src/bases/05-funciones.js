//Funciones en JS
/*const  saludar=function (nombre){
    return `hola,${nombre}`;
}
*/
/*const saludar2=(nombre)=>{
    return `hola,${nombre}`;
};*/

const saludar3=(nombre)=> `hola,${nombre}`;
const saludar4=()=>`hola mundo`;
console.log(saludar3('Vegeta'));
console.log(saludar4());


const getUser=()=>({
        id:'asdad',
        username:'papichulo',
});
console.log(getUser());
//Tarea
//1.transformar a funcion de flecha
//2.retornar objeto implicito
//3.prueba de la funcion
const getUsuarioActivo=(nombre)=>({
    
        uid:'asdad',
        username:nombre,
    
});
const usuario=getUsuarioActivo('Armando');
console.log(usuario);