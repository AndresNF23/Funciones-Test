"use strict";
const ejercicio5 = require("./funcion5");
test("verificacion", () => {
    let wordA = [];
    wordA = ["Rojo", "Azul", "Verde", "Amarillo", "Magenta"];
    let WordB = [];
    WordB = ["Rojo", "Verde", "Azul", "Magenta", "Amarillo"];
    expect(ejercicio5(wordA, WordB)).toContain("Iguales");
});
