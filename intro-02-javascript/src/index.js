import { heroes } from "./data/heroes";

//import {heroes}from './data/heroes'
//console.table(heroes);

/*const getHeroebyID=(id)=>{
    return heroes.find(heroes=>heroes.id===id)
}*/
const getHeroebyID=(id)=>heroes.find(heroes=>heroes.id===id)
     
console.log(getHeroebyID(5));

const getHeroesbyOwer=(owner)=>heroes.filter(heroes=>heroes.owner===owner);
console.log(getHeroesbyOwer('Marvel'));