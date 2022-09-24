"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
let WordA = [];
WordA = ["Rojo", "Azul", "Verde", "Amarillo", "Magenta"];
let WordB = [];
WordB = ["Rojo", "Verde", "Azul", "Magenta", "Amarillo"];
function funcion5(WordA, WordB) {
    WordA.sort();
    WordB.sort();
    if (WordA.length == WordB.length && WordA.every(function (v, i) { return v === WordB[i]; })) {
        return "Iguales";
    }
    else {
        return "No iguales";
    }
}
console.log(funcion5(WordA, WordB));
module.exports = funcion5;
