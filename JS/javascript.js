var saludo="Hola mundo desde JavaScrpt"
console.log(saludo)
//Comentarios
/*
Aqui va
nuestros comentarios

Forma de escribir la sintaxis
var nombre
var $nombre
var _nombre
var nombre1
var nombre_estudiante
Como no se puede escribir una variable
var 8nombre
Tampoco se puede utilizar palabras reservadas de JavaScript
var if, while, case, for
¿Cómo creamos nuestros archivos js?
JAVASCRIPT.js
var holaMundo
def HolaMundo{

}
*/


/*-------Variables en Java Script------
Existen dos tipos
1. var->Es una variable global 
puede ser utilizada dentro 
de toda la vida del programa o todos los alcances
2. let->Es una variable privada que se utiliza 
en una parte especifica de mi programa
 eso quiere decir que es una variable local
*/
/*{
let hello="Hello world"




}*/

var a
a=7
console.log("El valor de a es : ",a)
let b
b=6
console.log("El valor de b es : ",b)
console.log(window)
console.log(window.a)
console.log(window.b)
/*------Variable tipo var------*/
var musica="Balada"
console.log("Variable antes del bloque", musica)
{
    var musica="Cumbia"
    console.log("Variable dentro del bloque", musica)
}
console.log("Variable fuera del bloque", musica)
console.log("******************Let********************")
let musica2="Salsa"
console.log("variable antes de entrar al bloque", musica2)
{
    let musica2="Merenge"
    console.log("Variable dentro del bloque", musica2)
}
console.log("Variable fuera del bloque", musica2)