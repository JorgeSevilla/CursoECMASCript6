/*

La siguiente versión de ECMAScript fue publicada en 2021. A continuación aprenderás acerca del método replaceAll, 
métodos privados en clases, Promise.any, referencias débiles y nuevos operadores de asignación.

Método replaceAll
El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

Este método recibe dos argumentos:

El patrón a reemplazar, puede ser un string o una expresión regular.
El nuevo elemento que sustituye al reemplazado.
Este método fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función
 de reemplazar elementos, pero solamente una sola vez.

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
Métodos privados de clases
Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, 
se puede acceder a ellos fuera de la clase.

Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral (#).

class Clase {
  #private(valor){
    console.log(valor)
  }
  
  public(valor){
    console.log(valor)
  }
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function
Promise.any
Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta
 y se rechazará si todas las promesas son rechazadas.

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")




Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta)) // Promise 3
    .catch(error => console.log(error))
Referencias débiles
Un objeto WeakRef consiste en mantener una referencia débil a otro objeto,
 para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.

class Clase{
    constructor(valor){
        this.ref = new WeakRef(valor)
    }
    // ...
}
Nuevos operadores de asignación
En ES2021 se agregaron tres operadores de asignación:

Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.
// Antes de ES2021
x && (x = y)
x || (x = y)
x ?? (x = y)

// Después de ES2021
x &&= y
x ||= y
x ??= y
De esta manera se omite código innecesario.

// Asignación AND
let saludo = true
saludo ??= "Hola"
console.log(saludo) // "Hola"

// Asignación OR
let saludo = true
saludo ||= "Hola"
console.log(saludo) // true

// Asignación Nullish
let saludo = undefined
saludo ??= "Hola"
console.log(saludo) // "Hola"

*/