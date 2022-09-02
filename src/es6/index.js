/*En ECMAScript 6 ES6 y ES2015 fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje,
 dos de estas son: parámetros por defecto y plantillas literales.

En qué consisten los parámetros por defecto
Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, 
para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes
 en la invocación de la función.

Tal como puedes ver en el siguiente código, la función sumar recibe dos parámetros y retorna el valor total. 
Sin embargo, si alguien no decide poner alguno o todos los parámetros necesarios, 
pues que el programa no funcionará correctamente.

function sumar(number1, number2){
  return number1 + number2
}

sumar(3,4) //7
sumar(3)    //NaN  
sumar()      // NaN
Antes de ES6, se debía establecer una variable y utilizar el operador OR (||) con el valor por defecto necesario. 
El caracter guion bajo (_) lo utilizo para diferenciar el parámetro de la función de la variable declarada dentro.

function sumar(number1, number2){
  var _number1 = number1 || 0
  var _number2 = number2 || 0
  
  return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0
Con los parámetros por defectos añadidos en ES6, 
eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:

function sumar(number1 = 0, number2 = 0){
  return number1 + number2
}

sumar(3,4) // 7
sumar(3)    // 3
sumar()      // 0
Puedes utilizar cualquier valor siempre que sea necesario.

Qué son las plantillas literales
Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables.

Antes de ES6, si querías crear una cadena larga o un mensaje, debías utilizar la concatenación.

var nombre = "X"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
Esto trae varios problemas en la legibilidad y mantenibilidad del código. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

Con las plantillas literales añadidas en ES6, emplea el caracter ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje e incluir las variables con la sintaxis ${variable}.

var nombre = "X"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
*/

function testFunction(name = 'Jorge', age = 32, country = 'BR'){
    console.log(name, age, country);
}

testFunction();
testFunction('Name1', 11, 'CL');

let word1 = 'Hello';
let word2 = 'World';

let printWords = word1 + ' ' + word2;
console.log(printWords);

let anotherPrintWords = `${word1} ${word2}`;
console.log(anotherPrintWords);
console.log(`${word1} ${word2}`);

//Imprimiendo objetos

let person = {
    name: 'X', 
    age: 21, 
    city: 'Floripa'
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person);

let { name } = person;
console.log(name);

//Imprimiendo arrays

let list1 = ['One', 'Two', 'Three'];
let list2 = ['Four', 'Five', 'Six'];
let printList = ['Start here', list1, list2];

console.log(printList);

//Probando constantes
const a = 'b';
a = 'a';
console.log(a);