//objetos literales

const persona={
nombre:'Armando',
apellido:" Marin",
edad:23,
direccion:{
    ciudad:'Pwewz zeledon',
    zip:102022,
    lat:415454,
    lng:112555,
}
};
console.log({

    persona:persona
});
const persona2={...persona};
persona2.nombre='Peter';
console.log(persona2);