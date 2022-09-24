/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

 function fun6(){

    const array = ['N', 23, 'D',2, 202, 'A']

    const letterA= array.slice(0, 1);
    const letterB = array.slice(2, 3);
    const letterC = array.slice(5, 6);

    const string = letterA.concat(letterB, letterC);
    const orderA = string.sort();

    const numbers = array.filter(Number);
    const orderB = numbers.sort((a:any,b:any)=>a-b);
    const sorted = orderA.concat(orderB);
    console.log(sorted);

    return (sorted);
}
module.exports = fun6;