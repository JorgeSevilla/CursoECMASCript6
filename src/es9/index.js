/*
La siguiente versión de ECMAScript fue publicada en 2018. Aprenderás sobre: parámetro rest, propiedades de propagación, 
método finally para promesas y expresiones regulares.

Qué son los Parámetros rest
Los parámetros rest consisten en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) 
seguido de una variable que contendrá los elementos en un array.

Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)
También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.

const objeto = {
  nombre: "Jorge",
  age: 18,
  plataforma: "Platzi"
}
const array = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
cons [cero, ...positivos] = array

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]
El parámetro rest siempre deberá estar en la última posición, caso contrario existirá un error de sintaxis.

function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 
Diferencias entre el parámetro rest y el operador de propagación
Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.
 El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, 
 mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.

const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")
Propiedades de propagación
Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. 
Sirve para crear nuevos objetos a partir de otros.

const objeto = {
  nombre: "Jorge",
  age: 18,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
Crear copias de objetos utilizando las propiedades de propagación
Semenjante a crear copias de arrays utilizando el operador de propagación,
 se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.
  De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false
Método finally en promesas
El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada 
como resuelta o rechazada.

promesa()
    .then(response => console.log(response) // Promesa resuelta
    .catch(error => console.log(response) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final  
Expresiones regulares
Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas de caracteres
 increíblemente potente y están presentes en todos los lenguajes de programación. 
 En JavaScript se crea estre patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer coincidir la búsqueda.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
Este es un tema extenso, por lo que te recomiendo seguir el curso y leer los métodos sobre expresiones regulares en JavaScript.

*/

const obj = {
    name: 'Jorge',
    age: '38',
    country: 'BR',
}

let { country, ...all } = obj;
console.log(country, all); 


const helloWorld = () => {
    return new Promise((resolve, reject) =>{
      (true)
          ?   setTimeout(() => resolve('Hello World'), 3000)
          : reject(new Error('Test Error'));
    });
  };

  helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-09-12');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);