export const renderItems = (data) => {
  console.log(data)
  const ul = document.createElement("ul"); //Crear un <ul> con metodo createElement; se guarda en una variable para después ser utilizada
  data.forEach(function(data){   //Metodo forEach o map, para recorrer el arreglo de objetos
    console.log(data) //imprimir en la consola; aparece un listado detallado por objeto
    const li = document.createElement("li"); //Crear un <li> por cada objeto de la data
    console.log(li);
    ul.appendChild(li);//Agregar cada <li> al <ul> con appenChild u otro metodo apropiado
    console.log(ul);
    const div = document.querySelector('div[id=tarjetas]'); //Crear un elemento HTML y llamarlo con un selector del DOM
    div.appendChild(ul);  //Situar la lista no ordenada (ul) dentro de la etiqueta div
    //li.innerHTML = data; //Renderizar la base de datos de los personajes, solo aparece [Object object]
    li.innerHTML = `
    <img src = ${data.imageUrl}>  
    <h3 id= "title"> Mascota: ${data.name} </h3>
    <p> Descripción: ${data.shortDescription} </p>
    <p> Especie: ${data.facts.species} </p>
    <p> Vive en: ${data.facts.livesIn} </p>
    <p> Genero de la película: ${data.facts.filmGenre} </p>
    <h5> Dato curioso:
    <p> ${data.extraInfo.curiousFact} </p>
    `
  }); 

  return ul   //Retornar el elemento <ul>

  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // return 'example';
};

