/*Funcion filterData(data, filterBy, value), recibe tres parámetros: 
  El primer parámetro, data, nos entrega los datos. ¿del dataset?
  El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar (speciesGroup)
  El tercer parámetro, value, indica el valor de campo que queremos filtrar.  */

//1) Definir un arreglo, cada objeto con sus propiedades / const functionData = (data)->arreglo de mascotas
//2) Definir una variable que guarde la función del filtrado
//3) Usar método filter() / data.filter
//4) El metodo se aplica sobre el arreglo
//5) Dentro del metodo crear la condicion de filtrado (grupo de especies)
//6) Resultado: obtener un nuevo arreglo (dataFiltrada)
//7) El nuevo arreglo contiene solo a los personajes que cumplen con la condicion
//Console.log, mostrará en la consola la data filtrada

export const filterData = (data, filterBy, value) => {
  if (filterBy === "gender") {
    const filterGender = data.filter((item) => item.facts.gender === value);
    return filterGender;
  }
  if (filterBy === "speciesGroup") {
    const filterSpecies = data.filter(
      (item) => item.facts.speciesGroup === value
    );
    return filterSpecies;
  }
  if (filterBy === "filmGenre") {
    const filterGenre = data.filter((item) =>
      item.facts.filmGenre.includes(value)
    );
    return filterGenre;
  }
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name") {
    data.sort(function (a, b) {
      if (sortOrder === "ascendente") {
        //Añadir el parametro sortOrder ascendente
        if (a.name < b.name) return -1; //a aparece antes
        if (a.name > b.name) return 1; //b aparece antes
      }
      if (sortOrder === "descendente") {
        //Añadir el parametro sortOrder descendente; la lógica de invierte
        if (a.name < b.name) return 1; //a aparece antes
        if (a.name > b.name) return -1; //b aparece antes
      }
      return 0; //si son iguales no se cambia el orden
    });
    return data; //retornar la data ordenada
  }
};



/*export const computeStats = (data) =>{
  
  const hembras = data.filter((element) => element.facts.gender === 'Hembra');
  const cantidadHembras = hembras.length;
  
  /*data.reduce((acumulador, elementoActual) => {*/

/*const calculo = (cantidadHembras / data.length) * 100;
    return calculo
    //console.log(cantidadHembras);
    //return cantidadHembras

  //}, 1);
  
  /*data.reduce((accumulator, currentObject) => {

    
  });*/
//};

//1. Escoger la propiedad que usaremos para hacer el primer cálculo (genero hembra)
//const totalHembras =
//PRUEBAS
/*export const computeStats = (data, gender, value) => {
  const computeStats = (data, property, value) => {
    if (property === "gender") {
      const calculo = data.reduce((accumulator, currentObject) => {
        if (currentObject[property] === value) {
          accumulator += 1;
        }
        return accumulator;
      }, 1);
    
      //console.log((calculo / data.length) * 100);
      return data.length > 0 ? (calculo / data.length) * 100 : 0;
      
    }
  };
};*/

/*export const computeStats = (data, property, value) => {  //Creamos 
  if (property === "gender") {
    const calculo = data.reduce((accumulator, currentObject) => {
      if (currentObject[property] === value) {
        accumulator += 1;
      }
      return accumulator;
    }; 0);
  
    return (calculo / data.length) * 100;
  }
};*/

export const computeStats = (data, property, value) => {
  //Creamos
  if (property === "gender") {
    const calculo = data.reduce((accumulator, currentObject) => {
      // El metodo reduce es un acumulador, es decir, se encarga de reducir todo un Array a un único valor
      if (currentObject[property] === value) {
        accumulator += 1;
      }
      console.log(accumulator);
      return accumulator;
    }, 0);
    return calculo;
  }
};

export const computeStats = (data) => {

}

//const hembras = data.gender.Hembra.length
/*const ciudades = [
  { id: 1, nombre: "New york", temperatura: 25 },
  { id: 2, nombre: "Los Ángeles", temperatura: 30 },
  { id: 3, nombre: "Chicago", temperatura: 15 },
  { id: 4, nombre: "Queens", temperatura: 27 }
];

const sumaDeLasTemperaturas = ciudades.reduce((acumulador, ciudad, indice) => {
  console.log(`La temperatura de la ciudad de ${ciudad.nombre} es de ${ciudad.temperatura} grados`);

  const temperaturaCiudad = ciudad.temperatura;
  return acumulador + temperaturaCiudad;
}, 0);

const temperaturaPromedio = sumaDeLasTemperaturas / ciudades.length;

console.log(`La temperatura promedio de los Estados Unidos es de ${temperaturaPromedio} grados`);



  //2. Sacar el porcentaje de las que son hembras (Cantidad de hembras/Total de animales x 100)
  //2.1. Conseguir la cantidad total de hembras
  //2.2. Cantidad total de animales 
  console.log(data);
};*/
