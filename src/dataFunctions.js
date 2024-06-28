// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

import dataset from "./data/dataset";

export const filterSpecies = () => {
  /*Funcion filterData(data, filterBy, value), recibe tres parámetros: 
  El primer parámetro, data, nos entrega los datos. ¿del dataset?
  El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar. 
  El tercer parámetro, value, indica el valor de campo que queremos filtrar.*/

  function filterData(data, filterBy, value){
    //filter() Este método crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    const perros = data.filter(dataset.speciesGroup === 'value,Perros') 
    console.log(perros)
    return perros;
  }
  return 'filterSpecies';
};

//export const filterGenre = () => {


//return [];
//};
//export const sortAZ = () => {


 // return [];
//};