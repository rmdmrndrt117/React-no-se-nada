

const nombre='Armando';
const apellido='Marin';
//const nombreCompleto=nombre+' '+ apellido;
const nombreCompleto=`
${ nombre} 
${apellido}
`;
console.log(nombreCompleto);
function getSaludo(nombre){
    return 'hola '+nombre;
}
console.log(`este es um texto:${getSaludo(nombre)}`);