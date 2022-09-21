/*
La siguiente versión de ECMAScript fue publicada en 2020 y ahora conocerás sobre la importación dinámica.

Qué es la importación dinámica
La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, 
y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.

La expresión import() permite manejar módulos dinámicamente, ya que la sintaxis de 
ECMAScript import ... from ... no lo permite.

La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.

const ruta = "./modulo.js"

// Utilizando promesas
import(ruta)
    .then( modulo => {
        modulo.funcion1()
        modulo.funcion2()
    })
    .catch(error => console.log(error))
    
// Utilizando async/await
async function importarModulo(rutaDelModulo) {
    const modulo = await import(rutaDelModulo)
    modulo.funcion1()
    modulo.funcion2()
}

importarModulo(ruta)
Ejemplo de importación dinámica
De esta manera puedes utilizar una importación dinámica en tu aplicación para desencadenar una descarga
 de un módulo cuando el usuario lo vaya a utilizar. Por ejemplo, al realizar clic en un botón.

const boton = document.getElementById("boton")

boton.addEventListener("click", async function () {
    const modulo = await import('./modulo.js')
    modulo.funcion()
})
Puedes usar las herramientas de desarrollador para visualizar la descarga de archivos al realizar clic en el botón.

*/

const button = document.documentElementById('btn');

button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
});