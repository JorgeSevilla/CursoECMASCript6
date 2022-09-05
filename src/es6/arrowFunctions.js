/*Las siguientes características de ES6 que aprenderás son: parámetros en objetos, funciones flecha y promesas.

Qué son los parámetros en objetos
Los parámetros en objetos son una función que consiste en crear objetos a partir de variables sin repetir su nombre como propiedad.

Antes de ES6, para crear un objeto a partir de variables consistía de la siguiente manera:

const nombre = "Jorge"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
 }

objeto // { nombre: 'Jorge', edad: 23 }
Con los parámetros en objetos puedes obviar la repetición de nombres, JavaScript creará la propiedad a partir del nombre de la variable con su respectivo valor.

const nombre = "Jorge"
const edad = 23

const objeto = {nombre, edad}

objeto // { nombre: 'Jorge', edad: 23 }
El resultado es el mismo, pero sin la necesidad de repetir palabras.

Funciones flecha
Las funciones flecha (arrow functions) consiste en una función anónima con la siguiente estructura:

//Función tradicional
function nombre (parámetros) {
    return (valorRetornado)
}

//Función flecha
const nombre = (parámetros) => {
    return (valorRetornado)
}
Se denominan función flecha por el elemento => en su sintaxis.

Si existe un solo parámetro, puedes omitir los paréntesis.

const porDos = num => num*2
Retorno implícito
Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, y que el código sea escrito en una sola línea.

//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
Si el retorno requiere de más líneas y aún deseas utilizarlo de manera implícita, deberás envolver la instrucción entre paréntesis.

const suma = (num1, num2) => (
    num1 + num2
)
Promesas
Una promesa es una forma de manejar el asincronismo en JavaScript. Si aún no sabes en qué consiste el asincronismo, no te preocupes, existe un curso completo de este tema.

Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6, por un problema del manejo del asincronismo con funciones desencadenantes, llamado Callback Hell{target="_blank"}.

const promesa = () => {
    return new Promise( (resolve, reject) => {
        if( something ) {
            resolve( "Se ha resuelto la promesa" )
        else {
            reject( "Se ha rechazado la promesa" )
        }
    }
}

promesa
    .then( respuesta => console.log(respuesta) ) //En caso que se ejecute resolve
    .catch( error => console.log(error) ) //En caso que se ejecute reject
    */

    const helloPromise = () =>{
        return new Promise((resolve, reject) =>{
            if(true){
                resolve('Ok');
            }else{
                reject('Error');
            }
        });
    }

    helloPromise()
        .then(response => console.log(response))
        .catch(error =>console.log(error));