import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//1. Emplear un selector del DOM y manejador de eventos para seleccionar y vincular un elemento <select>
const selectSpeciesGroup = document.getElementById('specieselect');
//2. Aplicar un manejador de eventos
selectSpeciesGroup.addEventListener('click', filterData(data, facts.speciesGroup, 'Perros'));


console.log(filterData, renderItems(data), data);
