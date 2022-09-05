/* 
Las siguientes características de ES6 que aprenderás son: sintaxis de clases, módulos y generadores.

Clases en JavaScript
La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, 
permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO).

La estructura de clases en JavaScript consiste en:

Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula).
La función constructora sirve para crear las variables necesarias en la instancia del objeto.
Para definir atributos necesitas el contexto this, que representa la instancia del objeto.
Métodos para definir las acciones de la clase.
Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.
class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    
    suma(num1, num2){
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4
Módulos ECMAScript
Para que JavaScript sea más ordenada, legible y mantenible; ES6 introduce una forma de compartir código entre los archivos de manera modular. 
Esto involucra exportar funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.

Para explicar cómo funciona las exportaciones e importaciones de código, debes tener mínimo dos archivos, 
uno para exportar las funcionalidades y otro que las importe para ejecutarlas.

Qué son las exportaciones de código
Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export. 
Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

Por ejemplo, en el archivo math_function.js declaramos una función para sumar dos valores, el cual lo exportaremos.

//math_function.js
export const add = (x,y) => {
    return x + y
}
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction, ... }
Importaciones de código
Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, 
que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original. 
Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

Por ejemplo, importamos la función add del archivo math_function.js para utilizarla en un archivo main.js.

// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4
Si importamos el módulo con un nombre diferente, existirá un error de sintaxis.

// Erróneo
import { suma } from './math_functions.js'

suma(2,2) //SyntaxError: The requested module '/src/archivo1.js' does not provide an export named 'suma'
Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) 
y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.

// main.js
import * as myMathModule from './math_functions.js';

myMathModule.add(2,2) //4
myMathModule.otherFunction()
...
Exportaciones por defecto
Si solo UN valor será exportado, entonces se puede utilizar export default. De esta manera no es necesario las llaves {} al exportar e importar.

//math_function.js
export default function add (x,y){
    return x + y;
}
Adicionalmente, no se puede usar export default antes de declaraciones const, let o var, pero puedes exportarlas al final.

//Erróneo
export default const add  = (x,y) => {
    return x + y;
}

//Correcto
const add  = (x,y) => {
    return x + y;
}

export default add
Importaciones por defecto
Si únicamente UN valor será impotado, entonces se puede utilizar cualquier nombre en la importación. De esta manera no es necesario las llaves {}.

//Las siguientes importaciones son válidas
import  add  from './math_functions.js'
import  suma  from './math_functions.js'
import  cualquierNombre  from './math_functions.js'
Sin embargo, es recomendable utilizar siempre el nombre de la función, para evitar confusiones.

Combinar ambos tipos de exportaciones e importaciones
Teniendo las consideraciones de importaciones y exportaciones, nombradas y por defecto, entonces podemos combinarlas en un mismo archivo.

// module.js
export const myExport = "hola"
function myFunction() { ... }

export default myFunction

// main.js
import myFunction, { myExport } from "/module.js"
Generadores
Los generadores son funciones que devuelven solamente valor en cada invocación.

Su sintaxis es la siguiente:

La palabra reservada function* (con el asterisco al final).
La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
Crear una variable a partir de la función generadora.
El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

// Declaración
function* nombre(parámetros){
    yield (primer valor retornado)
    yield (segundo valor retornado)
    ...
    yield (último valor retornado)

}

//Crear el generador
const generador = nombre(argumentos)

// Invocacioens
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
...
generador.next().value //último valor retornado
Por ejemplo, creemos un generador para retornar tres valores.

function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}
*/


//Clases
class Calculator {
    constructor (){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

    subs(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
}

const calcSum = new Calculator();
console.log('El valor es: ', calcSum.sum(2, 2));

const calcSubs = new Calculator();
console.log('El valor es: ', calcSubs.subs(3, 2));

//Módulos
import { hello } from './module';
hello();

//Generators

function* helloWorld(){
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World!';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);