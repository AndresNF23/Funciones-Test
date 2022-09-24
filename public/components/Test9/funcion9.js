"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
function funcion9() {
    var number = 10;
    var i;
    var total = 1;
    for (i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}
module.exports = funcion9;
