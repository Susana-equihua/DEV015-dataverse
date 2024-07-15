import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

//Ubicar en dónde se va a posicionar el renderItems en la página: <section id="root">
const elementSection = document.querySelector('section[id="root"]'); //Crear un elementoHTML(<section id="root">) y llamarlo con un selector del DOM
elementSection.appendChild(renderItems(data)); //Situar la lista no ordenada (ul) de view.js dentro de la etiqueta section con la constante renderItems(data)

let filteredData = data; //Variable de tipo let para guardar la data filtrada

//Manejo del DOM para detectar la interaccion de la usuaria con los filtros
const filterSpecies = document.querySelector("select[id=specie-select]"); //Llamar el elemento select con un selector DOM (con su id="root") y guardarlo en una constante
filterSpecies.addEventListener("change", function (event) {
  //Esuchar el evento change sobre el select del filtro por especie
  elementSection.innerHTML = ""; //Para eliminar el renderizado. Se asigna una cadena vacía como contenido HTML al elementSection
  const valorSeleccionado = event.target.value; //Constante para guardar el valor que seleccione al usuario, será el dato asignado a value
  filteredData = filterData(data, "speciesGroup", valorSeleccionado); //Guardar en una constante las especificaciones de filterData de acuerdo a la propiedad a filtrar
  elementSection.appendChild(renderItems(filteredData)); //Llamar a renderItems y pasarle como parametro la const filteredDataSpecies
});

const filterGender = document.querySelector("select[id=gender-select]");
filterGender.addEventListener("change", function (event) {
  elementSection.innerHTML = "";
  const valorSeleccionado = event.target.value;
  filteredData = filterData(data, "gender", valorSeleccionado);
  elementSection.appendChild(renderItems(filteredData));
});

const filterFilmGenre = document.querySelector("select[id=film-select]");
filterFilmGenre.addEventListener("change", function (event) {
  elementSection.innerHTML = "";
  const valorSeleccionado = event.target.value;
  filteredData = filterData(data, "filmGenre", valorSeleccionado);
  elementSection.appendChild(renderItems(filteredData));
});

//Manejo del DOM para ordenar por orden alfabético
const sortDataAsc = document.querySelector("button[id=btnUp]"); //Llamar al botón de orden ascendente
sortDataAsc.addEventListener("click", function () {
  //Escuchar el evento click sobre el boton de ordenar ascendente
  elementSection.innerHTML = ""; //Para eliminar el renderizado. Se asigna una cadena vacía como contenido HTML al elementSection
  const ordenAsc = sortData([...filteredData], "name", "ascendente"); //Constante para guardar la funcion de sortData con se le pasa como parametro filteredData
  elementSection.appendChild(renderItems(ordenAsc)); //Llamar a renderItems y pasarle como parametro la const ordenAsc
});

const sortDataDesc = document.querySelector("button[id=btnDown]");
sortDataDesc.addEventListener("click", function () {
  elementSection.innerHTML = "";
  const ordenDesc = sortData([...filteredData], "name", "descendente");
  elementSection.appendChild(renderItems(ordenDesc));
});

//Manejo de DOM para el botón de limpiar filtros
const filterClear = document.querySelector("button[id=btnClear]"); //Llamar al button
filterClear.addEventListener("click", function () {
  //Escuchar el evento click
  elementSection.innerHTML = ""; // Vaciar el contenido de elementSection; vaciar el contenido del section que muestra la data
  elementSection.appendChild(renderItems(data)); // Renderizar a la data original
  filterSpecies.value = ""; // Restablecer los valores de los selectores de cada filtro ('' una cadena vacía)
  filterGender.value = "";
  filterFilmGenre.value = "";
});

/*const estadistica = document.querySelector('button[id=btn-stats]');
estadistica.addEventListener('click', function(){
  const hembrasTotal = computeStats(data);
  console.log(hembrasTotal);
 //const resultadoHembras = computeStats(data, 'gender', 'Hembra');
 //console.log(resultadoHembras)
  //return data
});*/

//Manejo de DOM para botón de estadistica
const estadistica = document.querySelector("button[id=btn-stats]");
estadistica.addEventListener("click", function () {
  const hembraCalculo = computeStats(data, "gender", "porcentajeHembras");
  console.log(
    `Las hembras representan el ${hembraCalculo}% del total de animalitos`
  );

  const porcentajesEspecies = {
    aves: computeStats(data, "speciesGroup", "porcentajeAves"),
    acuaticos: computeStats(data, "speciesGroup", "porcentajeAcuaticos"),
    domesticos: computeStats(data, "speciesGroup", "porcentajeDomesticos"),
    especiesPequeñas: computeStats(
      data,
      "speciesGroup",
      "porcentajeEspeciesPequeñas"
    ),
    granja: computeStats(data, "speciesGroup", "porcentajeGranja"),
    salvajes: computeStats(data, "speciesGroup", "porcentajeSalvajes"),
  };
  //console.log(porcentajes)

  let grupoMayorEspecies = "";
  let porcentajeMayorEspecies = 0;

  for (const group in porcentajesEspecies) {
    if (porcentajesEspecies[group] > porcentajeMayorEspecies) {
      porcentajeMayorEspecies = porcentajesEspecies[group];
      grupoMayorEspecies = group;
    }
  }

  console.log(
    `El grupo de especie con mayor porcentaje es: ${grupoMayorEspecies} con ${porcentajeMayorEspecies}%`
  ); //muestra el grupo de especie con mayor porcentaje y el %

  const porcentajePeliculas = {
    comedia: computeStats(data, "filmGenre", "porcentajeComedia"),
    infantil: computeStats(data, "filmGenre", "porcentajeInfantil"),
    fantasia: computeStats(data, "filmGenre", "porcentajeFantasia"),
    musical: computeStats(data, "filmGenre", "porcentajeMusical"),
    drama: computeStats(data, "filmGenre", "porcentajeDrama"),
    romance: computeStats(data, "filmGenre", "porcentajeRomance"),
  };
  //console.log(porcentajePeliculas)

  let grupoMayorPeliculas = "";
  let porcentajeMayorPeliculas = 0;

  for (const pelicula in porcentajePeliculas) {
    if (porcentajePeliculas[pelicula] > porcentajeMayorPeliculas) {
      porcentajeMayorPeliculas = porcentajePeliculas[pelicula];
      grupoMayorPeliculas = pelicula;
    }
  }

  console.log(
    `El genero de pelicula con mas porcentaje es ${grupoMayorPeliculas} con ${porcentajeMayorPeliculas}%`
  );
  /*   const avesCalculo = computeStats(data, 'speciesGroup', 'porcentajeAves');
  console.log(avesCalculo)

  const acuaticoCalculo = computeStats(data, 'speciesGroup', 'porcentajeAcuaticos');
  console.log(acuaticoCalculo)

  const domesticoCalculo = computeStats(data, 'speciesGroup', 'porcentajeDomesticos');
  console.log(domesticoCalculo)

  const especiesPequeñasCalculo = computeStats(data, 'speciesGroup', 'porcentajeEspeciesPequeñas');
  console.log(especiesPequeñasCalculo)

  const granjaCalculo = computeStats(data, 'speciesGroup', 'porcentajeGranja');
  console.log(granjaCalculo)

  const salvajeCalculo = computeStats(data, 'speciesGroup', 'porcentajeSalvajes');
  console.log(salvajeCalculo) */
});
