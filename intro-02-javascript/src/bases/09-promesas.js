import  { getHeroebyID } from '../src/bases/08-imports'

/*const promesa=new Promise((resolve,reject)=> {

setTimeout(() => {
//tarea import 

 const heroe=getHeroebyID(6);
  
   if(heroe){
        resolve(heroe);
   }
   else{
    reject('no se encontro a toledo');
   } 
    

    
}, 2000);



} ) ;*/
/*promesa.then((heroe)=>{
   console.log('heroe',heroe);
})
.catch(err=>console.warn(err));
/*promesa.catch(()=>{
    console.log("no se pudo")
});*/
/*promesa.finally(()=>{
 console.log("no se pudo")
})
*/


    const GETheroebyIDasync=(id) =>{
        return  new Promise((resolve,reject)=> {

            setTimeout(() => {
            //tarea import 
            
             const heroe=getHeroebyID(id);
              
               if(heroe){
                    resolve(heroe);
               }
               else{
                reject('no se encontro a toledo');
               } 
                
            
                
            }, 2000);
            
    });
}
    
GETheroebyIDasync(3)
.then(console.log)
.catch(console.warn);

