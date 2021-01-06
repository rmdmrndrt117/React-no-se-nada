//desestructuracion
//asignacion desestructurante


const persona={
    nombre:'Tony',
    edad:45,
    clave:'IronMan',
    rango:`soldado`,
};
//const {nombre}=persona;
//console.log(nombre);

const Context=({nombre,edad,rango=`capitan`,clave})=>{

        //console.log(nombre,edad,rango);
    return{

        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:1541545,
            lng:545454,
        }

    } 

}

const {nombreClave,anios,latlng:{lat,lng}}=Context(persona);

console.log(nombreClave,anios);
console.log(lat,lng);


//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);