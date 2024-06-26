export const renderItems = (data) => {
  console.log(data)
  const elementUl = document.createElement("ul"); //Crear un <ul> con metodo createElement; se guarda en una variable para después ser utilizada
  elementUl.setAttribute("class","flex-container");
  data.forEach(function(data){   //Metodo forEach o map, para recorrer el arreglo de objetos
    console.log(data) //imprimir en la consola; aparece un listado detallado por objeto
    const elementLi = document.createElement("li"); //Crear un <li> por cada objeto de la data
    elementLi.setAttribute("class", "item-flex");
    console.log(elementLi);
    elementUl.appendChild(elementLi);//Agregar cada <li> al <ul> con appenChild u otro metodo apropiado
    console.log(elementUl);
    const elementSection = document.querySelector('section[id="grupoTarjetas"]'); //Crear un elemento HTML y llamarlo con un selector del DOM
    elementSection.appendChild(elementUl);  //Situar la lista no ordenada (ul) dentro de la etiqueta div
    //li.innerHTML = data; //Renderizar la base de datos de los personajes, solo aparece [Object object]
    elementLi.innerHTML = `
    <div id="text-card">
    <div id="text">
    <h3 id= "title">${data.name}</h3>
    <p class="parrafoTarjetas"><span class="spanColor">Descripción: </span> ${data.shortDescription} </p>
    <p class="parrafoTarjetas"><span class="spanColor">Especie: </span> ${data.facts.species} </p>
    <p class="parrafoTarjetas"><span class="spanColor">Vive en: </span> ${data.facts.livesIn} </p>
    <p class="parrafoTarjetas"><span class="spanColor">Genero de la película: </span> ${data.facts.filmGenre} </p>
    <p class="parrafoTarjetas"><span class="fun-fact">Dato curioso:</span> ${data.extraInfo.curiousFact} </p>
    </div>
    <div id="divFondoPersonaje">
    <img class="imgPersonaje" src = ${data.imageUrl} alt = "Aquí estaba ${data.name}">  
    </div>
    </div>
    `
  }); 

  return elementUl   //Retornar el elemento <ul>
};

