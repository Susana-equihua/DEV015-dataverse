# Disney Mascotas

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño de la interfaz de usuaria](#3-diseño-de-la-interfaz-de-usuaria)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Hacker edition](#8-hacker-edition)
* [9. Objetivos de aprendizaje](#9-objetivos-de-aprendizaje)
* [10. Pistas, tips y lecturas complementarias](#10-pistas-tips-y-lecturas-complementarias)
* [11. Consideraciones para pedir tu Project Feedback](#11-consideraciones-para-pedir-tu-project-feedback)

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

## 2. Resumen del proyecto

## 2. Definición del producto

## 3. Historias de Usuario

### Historia de Usuario 1:

Como usuaria, quiero ver información interesante y detallada sobre las mascotas más populares de disney, para conocer sobre los compañeros de mis personajes favoritos.

#### Definicion de Terminado (DoD)
La página web muestra en una lista de 24 objetos en forma de tarjetas sobre las mascotas más populares de disney, contenidas en un elemento `<ul>` y a su vez en un `<li>` de HTML. 

#### Criterios de Aceptación (AC):
El listado de las tarjetas de las mascotas se muestran de manera adecuada al abrir la página. Ofrecen información relevante de cada personaje como: una descripción corta, su especie, el grupo de especie al que pertenece, donde vide, datos curioso y el genero de la película al que pertenece.

### Historia de Usuario 2:

Como usuaria, quiero que la visualización de la información sea fácil y llamativa, para poder encontrar a mi personaje favorito rápido sin tener que hacer una lectura previa. 

#### Definicion de Terminado (DoD):
Los estilos de la aplicación están implementados con el lenguaje de CSS. Cada tarjeta contiene propiedades CSS para que sean dintinguibles.   

#### Criterios de Aceptación (AC):
El diseño de la página está basado al estilo Disney con colores llamativos y tipografía legible. Las imágenes son grandes y resaltan en su fondo. 

### Historia de Usuario 3:

Como usaria quiero poder filtrar las tarjetas por diferentes propiedades de los personajes para poder conocerlos rápidamente acorde al tema de búsqueda en el que me encuentre interesada.

#### Definicion de Terminado (DoD):
La estructura de la página web cuenta con elementos `<select>` que permiten filtrar por tres propiedades a las mascotas.

#### Criterios de Aceptación (AC):
Los filtros se encuentran al inicio de la página, son fáciles de usar e intuitivos con etiquetas claras. Los resultados deben actualizarse dinámicamente al aplicar o quitar algún filtro. 

 ### Historia de Usuario 4:
Como usuaria, quiero que las tarjetas se puedan ordenar de manera ascendente o descendente, para poder ver por orden alfabético el nombre de los personajes. 

#### Definicion de Terminado (DoD)
La página web tiene dos `<button>` para ordenar las tarjetas de manera ascendente o descenente. Son funcionales junto con los filtros.

#### Criterios de Aceptación (AC):
Los botones para ordenar deben ser visibles y claros con iconos para indicar la ordenación ascendente y descendente de acuerdo al orden alfabetico del nombre de las mascotas. Al selecionar un orden la lista se actualiza automáticamente.

### Historia de Usuario 5:

Como usuaria, quiero poder eliminar todos los filtros que haya aplicado, para poder explorar todas las tarjetas disponibles de la página.

#### Definicion de Terminado (DoD):
La aplicacion incluye un `<button>` que permite eliminar los filtros aplicados a la pagina.
En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que vas a generar con [prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/).
Esta página web se adecuará a lo que descubras que tu usuaria
necesita.

Además, en este proyecto utilizarás herramientas de
[inteligencia artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial)
como [ChatGPT](https://openai.com/chatgpt), [ExplainDev](https://explain.dev/),
entre otras para generar un set de datos en un archivo javascript.

El propósito de generar los datos en esta manera es brindarte la oportunidad de
adentrarte en el empleo de herramientas impulsadas por la inteligencia
artificial, así como en [técnicas de prompting](https://learnprompting.org/es/docs/intro).

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**. Con estadística
nos referimos a distintos cálculos que puedes hacer con los datos para mostrar
información aún más relevante a las usuarias (promedio, el valor máximo
o mínimo, etc).

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
| Versión Desktop 1                                          | Versión Desktop 2                                           | Versión Tablet                                           | Versión mobil                                           |

## 4. Funcionalidades

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**.

Aquí definimos en más detalle las funcionalidades mínimas que debe
tener:

* La aplicación debe permitir a la usuaria ver los items de la data en una visualización,
  que puede ser [tipo tarjetas](http://www.uxables.com/diseno-ux-ui/que-es-y-como-disenar-una-card/)
  o cualquier otra forma que tú decidas como la adecuada (pero desde aquí
  referimos a los items como "tarjetas"). **Cada una de las tarjetas debe estar
  contenida en un elemento `<li>` y estos a su vez contenido en
  un elemento `<ul>`.**

* El elemento `<ul>` deberá ser hijo de un elemento con atributo _id_
  de valor "root". **Este es un paso importante para que tu**
  **aplicación tenga la estructura requerida**

* Las tarjetas deben resaltar los valores de las propiedades de la data que
  le interesaría a la usuaria ver. Por ejemplo: nombre, fecha, imagen, etc.
  **Si vas a filtrar u ordenar por una propiedad, la tarjeta tiene que mostrar
  el valor de esta propiedad a la usuaria.**

* La interfaz debe estructurar semánticamente la data usando el estándar
  [microdatos](https://developer.mozilla.org/es/docs/Web/HTML/Microdata).
  Es obligatorio usar al menos los atributos
  [`itemscope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope),
  [`itemtype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype)
  y el atributo
  [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop).

  Por ejemplo, la siguiente data correspondiente a Ada Lovelace:

  ```json
    {
      "id": "ada-lovelace",
      "name": "Ada Lovelace",
      "shortDescription": "Pionera de la informática, fue la primera programadora.",
      "description": "Una visionaria del siglo XIX ...",
      "imageUrl": "URL_DE_LA_IMAGEN_GENERADA",
      "facts": {
        "yearOfBirth": 1843,
        "placeOfBirth": "London, England",
        "mainField": "Computer Science",
      }
    }
  ```

  puede ser estructurada semánticamente en HTML como:

  ```html
   <dl itemscope itemtype="WomenInTech">
    <img src="URL_DE_LA_IMAGEN_GENERADA" alt="Ada Lovelace" />
    <dt>Nombre:</dt><dd itemprop="name">Ada Lovelace</dd>
    <dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
    <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">1843</dd>
    <dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">London, England</dd>
    <dt>Campo de desempeño:</dt><dd itemprop="mainField">Computer Science</dd>
  </dl>
  ```

* La aplicación debe calcular y visualizar una estadística de la data. Puede
  ser una propiedad computada de cada item, como una propiedad adicional
  (por ejemplo, el índice de masa corporal de cada pokemon) o unas estadísticas
  de la data completa (por ejemplo, total de personas nacidas en los años 80s).

* La aplicación debe permitir a la usuaria filtrar la data. Deberás usar
  un elemento [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
  con [un atributo de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
  `data-testid="select-filter"`, y un atributo `name` con el nombre
  de la propiedad por la que filtrará (por ejemplo, si vas a filtrar por "type",
  el `<select>` tendrá  `name="type"`). Los `<option>` de este `<select>` deberán
  tener en el atributo `value` el valor del filtro (por ejemplo, si vas a filtrar
  por type "fire" sería `<option value="fire">Fire</option>`).

* La aplicación debe permitir a la usuaria ordenar la data.
  - Tendrá al menos un control `<select>` para ordenar.
  - Si usas solo un control `<select>`, debe tener
    [un atributo de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
    `data-testid="select-sort"` y un atributo `name` con el nombre de la
    propiedad por la que ordenará. (por ejemplo, si vas a ordenar por
    "num" seria `name="num"`). Este `<select>` tendrá dos [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
    con `value` `asc` y `desc`, para ordenar ascendente y descendente la data
    respectivamente (por ejemplo, `<option value="asc">A - Z</option>`).
  - Una alternativa es ofrecer la usuaria un ordenamiento mas complejo.
    Podrías implementar ordenar por varios propiedades. En este caso sería con
    un `<select>` con un atributo de datos `data-testid="select-sort"`, y que
    contiene hijos `<option>` con un `value` del nombre de la propiedad con
    cual vas a ordenar. (Por ejemplo, `<option value="name">Nombre</option>`).
    También, necesitarás otro control (`<radio>`,`<select>`, etc.) para decir
    que el ordenamiento es ascendente o descendente. Este control secundaria
    tendrá un atributo `name="sort-order"`, y tiene values `asc` y `desc`.

* Las funcionalidades de ordenar deben operar sobre la data filtrada.
  Por ejemplo, si filtro los pokemones de tipo fuego y luego los ordeno por
  nombre ascendente, la aplicación deberá mantener el filtro aplicado y
  ordenar los pokemones de tipo fuego.

* La aplicación debe permitir a la usuaria reiniciar la aplicación, limpiando
  filtros y ordenamiento, con un `<button>` con un atributo de datos
  `data-testid="button-clear"`.

* Las operaciones de filtrar, ordenar, limpiar, etc. no deben recargar
  la página, si no que deben agregar el contenido en una manera
  dinámica via javascript.

* La aplicación será _responsive_, es decir, debe visualizarse sin problemas
  desde distintos tamaños de pantallas: móviles, tablets y desktops.

Los siguientes wireframes, son ejemplos de una interfaz que puede cumplir con esta
funcionalidad. Como podrás ver, estos diseños cumplen con la metodología
[Mobile First](https://developer.mozilla.org/es/docs/Glossary/Mobile_First), la misma
que te recomendamos utilizar en todos tus proyectos:

Diseño Mobile:

* [Wireframe mobile 1](https://github.com/Laboratoria/curriculum/assets/123121338/54711bb7-cb05-448e-b677-3cbd9bf13c14)
* [Wireframe mobile 2](https://github.com/Laboratoria/curriculum/assets/123121338/bf96d3ce-150f-47a2-a605-2efac2e0497b)

Diseño Desktop:

* [Wireframe desktop 1](https://github-production-user-asset-6210df.s3.amazonaws.com/92090/261137084-1625aeb8-883c-4b79-86da-5fab34fa5b88.png)
* [Wireframe desktop 2](https://github-production-user-asset-6210df.s3.amazonaws.com/92090/261137087-6cef16bc-643a-4d6d-bc1c-e0daaeb21c88.png)

## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#8-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── README.md
├── package.json
├── src
|  ├── data
|  |  └── dataset.js (La que hayas generado con la IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only

```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará a la usuaria. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_).

En este archivo encontrarás una serie de _imports_ listos para _cargar_
las diferentes fuentes de datos.

Por ejemplo, los datos con los que vas a trabajar,
los encontrarás en la siguiente línea:

```js
import data from './data/dataset.js';
```

### `src/dataFunctions.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo va a contener toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada, esta función debe usar el método reduce.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que la usuaria interactúe
(click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos con los que vas a trabajar (los datos de ejemplo
o los datos que generarías con ayuda de la inteligencia artificial).

### `test/dataFunctions.spec.js`

En este archivo tendrás hacer pruebas unitarias de las funciones
implementadas en el archivo `dataFunctions.js`. (`filterBy`, `sortBy`, etc.)

### `test/data.js`

En esta archivo puedes construir y exportar data "mock" para usar en los tests.
Es mas fácil probar un arreglo de 5 elementos de un arreglo de 24, por eso
vas a crear una muestra de la data que quieres probar. Como mínimo
debes exportar un variable se llama `data`, pero puedes definir y exportar mas
si sea necesario para tus tests.

### `src/view.js`

Para alcanzar una mejor separación de responsabilidades en el código, éste
archivo debe tener todas las funciones que se utilizarán para renderizar
los elementos dinámicamente.

Al menos se requiere una función obligatoria:

* `renderItems(data)`: esta función recibe el arreglo de data para renderizar
  los elementos de cada item, y debería volver un elemento DOM o
  un string de HTML.

Recuerda que todas las funciones que se encuentren en este
archivo deberán ser exportadas para poder ser utilizadas en
otros archivos.

Recomendamos esta estructura para no solo proporcionar un marco claro y
organizado para el proyecto, facilitando la navegación comprensión, y
escalabilidad del código, sino también para seguir un principio de diseño
[Separación de Responsabilidades](https://dev.to/tamerlang/separation-of-concerns-the-simple-way-4jp2)
en codigo, donde cada archivo y carpeta
tiene una responsabilidad específica. La responsabilidad de los funciones en
`view.js` es para crear partes del DOM con la data.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

## 6. Hitos

Para abordar eficazmente un problema, resulta crucial adquirir una comprensión
profunda del mismo. Una estrategia efectiva consiste en desglosarlo en problemas
más pequeños, lo cual facilitará la identificación de las causas subyacentes y la
formulación de soluciones más eficientes.

En el contexto de este proyecto, recomendamos adoptar un enfoque por hitos.
Esta metodología te posibilitará concentrarte en un problema a la vez y
monitorizar tu avance. A continuación, te proporcionamos un calendario de hitos
que te servirá para estructurar tu trabajo.

* [Hito 1](./docs/01-milestone.md)
* [Hito 2](./docs/02-milestone.md)
* [Hito 3](./docs/03-milestone.md)
* [Hito 4](./docs/04-milestone.md)

## 7. Criterios de aceptación mínimos del proyecto

### Criterios de código

Con cada objetivo de aprendizaje, evaluamos que el código cumpla con algunos
criterios. Lo cual no excluye que puedas usar otras opciones, por ejemplo
en el caso de los selectores, proponemos el uso de `querySelector`,
no significa que no puedes usar `querySelectorAll` o `getElementById` también.

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de manera
individual con los siguientes comandos:

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas // Esto es para correr todos los tests de OAs
```

Ejecuta las pruebas mientras desarrollas para confirmar que
tu proyecto está logrando los objetivos. Si algunas pruebas no pasan,
no permitas que esto te impida avanzar o finalizar el proyecto.
Utiliza esta información para ver qué necesitas investigar y
cambiar en tu código, y consulta con tu coach cualquier
objetivo que tengas pendiente.

Nota: para el correcto funcionamiento de los tests, es necesario que tengas
instalado `Node.js (LTS)` con la versión 14.0.0 o superior. Para verificar
la versión de node ejecuta `node -v` en la terminal. Si el comando no te
devuelve ninguna versión, necesitas instalarlo, para esto, puedes descargarlo
desde su [sitio oficial](https://nodejs.org/).

#### HTML

* **Uso de HTML semántico**

  - [ ] Tiene un `<header>` con `<h1>`
  - [ ] Tiene un `<footer>`
  - [ ] Tiene un `<main>` con `<h2>`
  - [ ] Todas las etiquetas de controles (inputs, selects, radio, etc) tienen `<label>`
  - [ ] Todas las etiquetas `<label>` usan el atributo `for`
  - [ ] `<ul>` esta usado para dibujar la data
  - [ ] Los hijos de `<li>` usan attributos de [microdata](https://recursivos.com/html/microdatos/)
  `itemscope` e `itemprop`

Nota: Ten en cuenta que para poder testear el HTML de `<ul>`
y `<li>` en tu proyecto es necesario que ya tengas una data
creada, ya que a partir de la data se
crearán estos elementos.

#### CSS

* **Uso de selectores de CSS**

  - [ ] Uso de selector class para los items `<li>`
  - [ ] Uso de flexbox en sentido `row` y `column`
  - [ ] Uso de flexbox para el elemento que contiene los items `<li>`
  - [ ] Uso de flexbox para el elemento que contiene los UI inputs

* **Modelo de caja (box model): borde, margen, padding**

  - [ ] Uso de atributos de modelo de caja para los items `<li>`
  - [ ] Uso de atributos de modelo de caja para `<header>` o `<footer>`

#### Web APIs

* **Uso de selectores del DOM**

  - [ ] Uso de [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    para seleccionar elementos del DOM.

* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] Uso de `addEventListener` con callback que tiene parámetro de `event`,
    lo que permite el uso del objeto [`event`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
    con `event.target` o `event.currentTarget`.
  - [ ] La aplicación registra [Event Listeners](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
    para escuchar `click`, `change`, `keyup` dependiendo del evento que
    se quiere escuchar.

* **Manipulación dinámica del DOM**

  - [ ] La aplicación actualiza el atributo [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).
  - [ ] Uso de `createElement` y `appendChild`, o template strings
    para crear elementos.

#### JavaScript

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    y [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    en manera adecuada

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement
    [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
      para evaluar condiciones

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    o método [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    para iterar

* **Funciones (params, args, return)**

  En el archivo `dataFunctions.js` define las siguientes funciones:
  - [ ] una función `sortBy` que tiene 3 parámetros (`data`, `sortBy`, `sortOrder`)
    y devuelve el arreglo ordenado
  - [ ] una función `filterBy` que tiene 3 parámetros (`data`, `filterBy`, `value`)
    y devuelve el arreglo filtrado
  - [ ] una función `computeStats` que tiene al menos un parámetro (`data`)
    y devuelve un valor computado

  Más sobre estos puntos en [la sección dataFunctions.js](#src/dataFunctions.js)

* **Arrays (arreglos)**

  - [ ] Uso de [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [ ] Uso de [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    o [Array.prototype.toSorted - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
  - [ ] Uso de [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [ ] Uso de [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [ ] Uso de [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [ ] Uso de [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

* **Objetos**

  - [ ] Uso de notación de punto para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  - [ ] Uso de notación de brackets para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usa [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    y [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    para importar y exportar valores desde un modulo JavaScript.

### Criterios del proyecto

#### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.

#### Historias de usuario

Una vez que entiendas las necesidades de tus usuarias, escribe las
[Historias de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario)
que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuario para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuario antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios de Aceptación).

#### Criterios de Aceptación (AC):
El botón tien una etiqueta visible que diga “Eliminar filtros” y se encuentra a un lado del menú filtro para que la usuaria pueda encontrarlo fácilmente sin necesidad de desplazarse por toda la página. Al dar click los filtros aplicados de desactivan y se muestran de manera utomática todas las tarjetas que contiene la página sin necesidad de que la usuaria tenga que recargar la página de manera manual.

### Historia de Usuario 6:
Como usuaria, quiero que la página tenga una opción para calcular una medida estadística, para poder analizar el contenido publicado en la página.

#### Definicion de Terminado (DoD): 
La página web contiene un `<button>` que permite mostrar una ventana con informacion de las estadisitcas calculadas.

#### Criterios de Aceptación (AC):
La aplicacion muestra los porcentajes de personajes que son hembras o machos, el grupo de especie y el genero de pelicula al que pertenecen. La estadística es fácil de leer y entender y se actualiza dinámicamente a medida que se da click. 

### Historia de Usuario 6:

Como usuaria, quiero que la página web tenga un diseño responsivo, para que pueda tener la experiencia de utilizarla desde diferentes dispositivos. 

#### Definicion de Terminado (DoD):
La aplicación contiene mediaqueries con puntos de quiebre que permiten la responsividad en diferentes dispositivos. 

#### Criterios de Aceptación (AC):
La página web se ajusta automáticamente a diferentes tamaños de pantalla (teléfonos móviles, tabletas, ordenadores de escritorio), con una navegacion clara y legible sin necesidad de hacer zoom. Los diferentes apartados se redimensionan correctamente para mantener una apariencia estética.

## 4. Generacion de Datos

## 5. Diseño de la Interfaz de Usuario

## 6. Test de Usabilidad - Puntos de mejora en la aplicación

Basándonos en el feedback obtenido de una muestra de usuarios objetivos para la aplicación web, se identifican los siguientes puntos de mejora para optimizar la experiencia del usuario en la página:

* Precisar la información: Mejorar la información que ofrece la aplicacion sobre cada mascota. La informació proporcionada no es muy clara, se sugiere mostrar una descripción que permita ambientar a los personajes en su película. 
* Funcionalidad de los filtros: Mejorar el código para que los filtros funcionen de manera conjunta. El usuario busca que 

## 6. Herramientas y Lenguajes Utilizados

## 7. Trabajo Colaborativo - Code By
