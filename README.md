# Disney Mascotas

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Generacion de Datos](#3-generacion-de-datos)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)
* [4. Puntos de mejora de la aplicación](#5-puntos-de-mejora-de-la-aplicacion)
* [6. Equipo de Trabajo - Code By](#7-equipo-de-trabajo-colaborativo-code-by)

***

## 1. Definición del producto

La página web desarrollada toma como tema principal "Las mascotas de Disney", este proyecto se creó con el objetivo de mostrar la información de una manera interactiva, atractiva y fácil de visualizar. 
Nuestra página cuenta con las siguientes elementos y funcionalidades para su uso: 
* **Botón "Conócelos":** Este elemeno permitirá a la usuaria dirigirse a la sección de tarjetas automáticamente. 
* **Botón de Filtro:** Al darle click, las opciones de filtrado se mostrarán en pantalla, y al presionarlo nuevamente, desapareceran. 
  - **Filtro por género:** La usuaria podrá filtrar a los personajes según hembra o macho. 
  - **Filtro por tipo de mascota:** La usuaria podrá filtrar a los personajes según el grupo de especie al que pertenece el personaje. 
  - **Filtro por género de película:** La usuaria podrá filtrar a los personajes según el género de película al que pertenece el personaje. 
* **Botón de Limpiar Filtros:** Una vez aplicados los filtros, la usuaria podrá regresar a la vista inicial con todas las tarjetas al darle click a este botón. 
* **Botones para Ordenar:** La página cuenta con dos botones para ordenar las tarjetas de la A a la Z, el primero lo hace de manera ascendente y el segundo, de manera descendente. Ambos botones funcionan aún cuando los filtros estén aplicados. 

## 2. Historias de Usuario

### Historia de Usuario 1:
Como usuaria, quiero ver información interesante y detallada sobre las mascotas más 
populares de disney, para conocer sobre los compañeros de mis personajes favoritos.

#### Definicion de Terminado (DoD)
La página web muestra en una lista de 24 objetos en forma de tarjetas sobre las 
mascotas más populares de disney, contenidas en un elemento `<ul>` y a su vez en 
un `<li>` de HTML. 

#### Criterios de Aceptación (AC):
El listado de las tarjetas de las mascotas se muestran de manera adecuada al abrir 
la página.Ofrecen información relevante de cada personaje como: una descripción 
corta, su especie, el grupo de especie al que pertenece, donde vide, datos curioso
y el genero de la película al que pertenece.

### Historia de Usuario 2:
Como usuaria, quiero que la visualización de la información sea fácil y llamativa, 
para poder encontrar a mi personaje favorito rápido sin tener que hacer una lectura
previa. 

#### Definicion de Terminado (DoD):
Los estilos de la aplicación están implementados con el lenguaje de CSS. Cada tarjeta
 contiene propiedades CSS para que sean dintinguibles.   

#### Criterios de Aceptación (AC):
El diseño de la página está basado al estilo Disney con colores llamativos y tipografía
 legible. Las imágenes son grandes y resaltan en su fondo. 

### Historia de Usuario 3:
Como usaria quiero poder filtrar las tarjetas por diferentes propiedades de los 
personajes para poder conocerlos rápidamente acorde al tema de búsqueda en el que
me encuentre interesada.

#### Definicion de Terminado (DoD):
La estructura de la página web cuenta con elementos `<select>` que permiten filtrar por
tres propiedades a las mascotas.

#### Criterios de Aceptación (AC):
Los filtros se encuentran al inicio de la página, son fáciles de usar e intuitivos con 
etiquetas claras. Los resultados deben actualizarse dinámicamente al aplicar o quitar 
algún filtro. 

### Historia de Usuario 4:
Como usuaria, quiero que las tarjetas se puedan ordenar de manera ascendente o descendente,
para poder ver por orden alfabético el nombre de los personajes. 

#### Definicion de Terminado (DoD)
La página web tiene dos `<button>` para ordenar las tarjetas de manera ascendente o 
descenente. Son funcionales junto con los filtros.

#### Criterios de Aceptación (AC):
Los botones para ordenar deben ser visibles y claros con iconos para indicar la 
ordenación ascendente y descendente de acuerdo al orden alfabetico del nombre de 
las mascotas. Al selecionar un orden la lista se actualiza automáticamente.

### Historia de Usuario 5:
Como usuaria, quiero poder eliminar todos los filtros que haya aplicado, para poder
explorar todas las tarjetas disponibles de la página.

#### Definicion de Terminado (DoD):
La aplicacion incluye un `<button>` que permite eliminar los filtros aplicados a la pagina.

#### Criterios de Aceptación (AC):
El botón tien una etiqueta visible que diga “Eliminar filtros” y se encuentra a 
un lado del menú filtro para que la usuaria pueda encontrarlo fácilmente sin necesidad
de desplazarse por toda la página. Al dar click los filtros aplicados de desactivan
y se muestran de manera utomática todas las tarjetas que contiene la página sin 
necesidad de que la usuaria tenga que recargar la página de manera manual.

### Historia de Usuario 6:
Como usuaria, quiero que la página tenga una opción para calcular una medida 
estadística, para poder analizar el contenido publicado en la página.

#### Definicion de Terminado (DoD): 
La página web contiene un `<button>` que permite mostrar una ventana con informacion
de las estadisitcas calculadas.

#### Criterios de Aceptación (AC):
La aplicacion muestra los porcentajes de personajes que son hembras o machos, el 
grupo de especie y el genero de pelicula al que pertenecen. La estadística es fácil 
de leer y entender y se actualiza dinámicamente a medida que se da click. 

### Historia de Usuario 7:
Como usuaria, quiero que la página web tenga un diseño responsivo, para que pueda
tener la experiencia de utilizarla desde diferentes dispositivos. 

#### Definicion de Terminado (DoD):
La aplicación contiene mediaqueries con puntos de quiebre que permiten la 
responsividad en diferentes dispositivos. 

#### Criterios de Aceptación (AC):
La página web se ajusta automáticamente a diferentes tamaños de pantalla (teléfonos 
móviles, tabletas, ordenadores de escritorio), con una navegacion clara y legible sin 
necesidad de hacer zoom. Los diferentes apartados se redimensionan correctamente para 
mantener una apariencia estética.

## 3. Diseño de la interfaz de usuaria

### 3.1. Prototipado
Para este proyecto se realizaron dos prototipos (de baja y alta fidelidad) diseñados para 3 principales dispositivos: celulares, tabletas y ordenadores, a continuación se muestran las imagenes de ambos: 
- **Baja Fidelidad**: 

  | ![Descripción alternativa 1](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-baja-fidelidad-1.png?raw=true) | ![Descripción alternativa 2](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-baja-fidelidad-2.png?raw=true) | ![Descripción alternativa 3](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-baja-fidelidad-4.png?raw=true) | ![Descripción alternativa 4](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-baja-fidelidad-3.png?raw=true) |
  |:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|
  | Versión Desktop 1                                          | Versión Desktop 2                                           | Versión Tablet                                           | Versión mobil                                           |

- **Alta Fidelidad**: 

  | ![Descripción alternativa 1](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-alta-fidelidad-1.png?raw=true) | ![Descripción alternativa 2](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-alta-fidelidad-2.png?raw=true) | ![Descripción alternativa 3](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-alta-fidelidad-3.png?raw=true) | ![Descripción alternativa 4](https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Dise%C3%B1o%20de%20la%20interfaz/prototipo-alta-fidelidad-4.png?raw=true) |
  |:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|:-------------------------------------------------------:|
  | Versión Desktop 1                                          | Versión Mobile                                           | Versión Tablet                                           | Versión Tablet 2                                           |

### 4. Prompting
Para la recolección de la información que se iba a usar dentro de la página, recurrimos al uso de una inteligencia artificial (ChatGPT), al que le dimos las siguientes indicaciones: 
- **Primer promp:**

  <img src="https://github.com/Pamelajharely83/DEV015-dataverse/blob/main/PROMPTING%20-%20DATAVERSE/Primer%20prompt.png?raw=true" alt="primer-promp" width="400" style="margin-right: 10px;"/>

- **Segundo promp:**

  | ![Segundo promp pt1](https://github.com/Pamelajharely83/DEV015-dataverse/blob/main/PROMPTING%20-%20DATAVERSE/Segundo%20prompt%20pt1.png?raw=true) | ![Segundo promp pt2](https://github.com/Pamelajharely83/DEV015-dataverse/blob/main/PROMPTING%20-%20DATAVERSE/Segundo%20prompt%20pt2.png?raw=true) |
  |:-------------------------------------------------------:|:-------------------------------------------------------:|
  | Parte 1                                            | Parte 2                                            |

- **Tercer promp:**

  <img src="https://github.com/Pamelajharely83/DEV015-dataverse/blob/main/PROMPTING%20-%20DATAVERSE/Tercer%20prompt%20(mejora%20de%20descripci%C3%B3n%20corta).png?raw=true" alt="primer-promp" width="400" style="margin-right: 10px;"/>

- **Cuarto promp:**

  <img src="https://github.com/Pamelajharely83/DEV015-dataverse/blob/main/PROMPTING%20-%20DATAVERSE/Quinto%20prompt%20(obtenci%C3%B3n%20de%20informaci%C3%B3n%20adicional%20para%20descripci%C3%B3n%20larga).png?raw=true" alt="primer-promp" width="400" style="margin-right: 10px;"/>

## 5. Puntos de mejora en la aplicación

Basándonos en el feedback obtenido de una muestra de usuarios objetivos para la 
aplicación web, se identifican los siguientes puntos de mejora para optimizar la 
experiencia del usuario en la página:

* Precisar la información: Mejorar la información que ofrece la aplicacion sobre 
cada mascota. La informació proporcionada no es muy clara, se sugiere mostrar una 
descripción que permita ambientar a los personajes en su película, tanto en las 
imágenes como en su texto.

* Funcionalidad de los filtros: Realizar cambios en el código sobre la funcionalidad de 
los filtrospara para que estos actuen de manera conjunta. El usuario quiere obtener la 
visualización de los personajes con características específicas.

* Colores utilizados en los botones: Sugiere realizar el cambio de los colores utilizados 
en los iconos de los botones de ordenar y en el menú de filtros que se encuentran en la 
barra de navegación. El tono genera dificultad de lectura e identificación de su funcionalidad.

## 6. Equipo de trabajo - Code By

Pamela Jharely Briceño Lopez
Susana Equihua Carbajal