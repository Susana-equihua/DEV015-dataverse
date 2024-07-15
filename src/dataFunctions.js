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

export const computeStats = (data, property, statsBy) => {
  //*PORCENTAJE DE HEMBRAS

  if (statsBy === "porcentajeHembras") {
    const hembras = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Hembra") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoHembras = (hembras / data.length) * 100;
    return Math.round(calculoHembras);
  }

  //*PORCENTAJE DE ESPECIES

  if (statsBy === "porcentajeAves") {
    const aves = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Aves") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoAves = (aves / data.length) * 100;
    return Math.round(calculoAves);
  }

  if (statsBy === "porcentajeAcuaticos") {
    const acuaticos = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Animales Acuáticos") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoAcuaticos = (acuaticos / data.length) * 100;
    return Math.round(calculoAcuaticos);
  }

  if (statsBy === "porcentajeDomesticos") {
    const domesticos = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Domestico") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoDomesticos = (domesticos / data.length) * 100;
    return Math.round(calculoDomesticos);
  }

  if (statsBy === "porcentajeEspeciesPequeñas") {
    const especiesPequeñas = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Pequeñas especies") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoEspeciesPequeñas = (especiesPequeñas / data.length) * 100;
    return Math.round(calculoEspeciesPequeñas);
  }

  if (statsBy === "porcentajeGranja") {
    const granja = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Animales de Granja") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoGranja = (granja / data.length) * 100;
    return Math.round(calculoGranja);
  }

  if (statsBy === "porcentajeSalvajes") {
    const salvajes = data.reduce((contador, obj) => {
      //console.log(obj.facts[property]);
      if (obj.facts[property] === "Animales Salvajes") {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoSalvajes = (salvajes / data.length) * 100;
    return Math.round(calculoSalvajes);
  }

  //*PORCENTAJE DE GENEROS DE PELICULAS

  if (statsBy === "porcentajeComedia") {
    const comedia = data.reduce((contador, obj) => {
      const comediaPropiedad = obj.facts[property];
      if (comediaPropiedad.includes("Comedia")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoComedia = (comedia / data.length) * 100;
    return Math.round(calculoComedia);
  }

  if (statsBy === "porcentajeInfantil") {
    const infantil = data.reduce((contador, obj) => {
      const infantilPropiedad = obj.facts[property];
      if (infantilPropiedad.includes("Infantil")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoInfantil = (infantil / data.length) * 100;
    return Math.round(calculoInfantil);
  }

  if (statsBy === "porcentajeFantasia") {
    const fantasia = data.reduce((contador, obj) => {
      const fantasiaPropiedad = obj.facts[property];
      if (fantasiaPropiedad.includes("Infantil")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoFantasia = (fantasia / data.length) * 100;
    return Math.round(calculoFantasia);
  }

  if (statsBy === "porcentajeMusical") {
    const musical = data.reduce((contador, obj) => {
      const musicalPropiedad = obj.facts[property];
      if (musicalPropiedad.includes("Infantil")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoMusical = (musical / data.length) * 100;
    return Math.round(calculoMusical);
  }

  if (statsBy === "porcentajeDrama") {
    const drama = data.reduce((contador, obj) => {
      const dramaPropiedad = obj.facts[property];
      if (dramaPropiedad.includes("Infantil")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoDrama = (drama / data.length) * 100;
    return Math.round(calculoDrama);
  }

  if (statsBy === "porcentajeRomance") {
    const romance = data.reduce((contador, obj) => {
      const romancePropiedad = obj.facts[property];
      if (romancePropiedad.includes("Infantil")) {
        contador += 1;
      }
      return contador;
    }, 0);
    const calculoRomance = (romance / data.length) * 100;
    return Math.round(calculoRomance);
  }
};

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

/* export const computeStats = (data, property, value) => {
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

export const computeStats = (data) => {};
 */
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
