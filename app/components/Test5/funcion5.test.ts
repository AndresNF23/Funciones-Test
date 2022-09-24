const ejercicio5 = require ("./funcion5");

test("verificacion", () =>{

   let  wordA: string [] = [];
        wordA = ["Rojo", "Azul", "Verde", "Amarillo", "Magenta"];

   let  WordB: string [] = [];
        WordB = ["Rojo", "Verde", "Azul", "Magenta", "Amarillo"];

    expect(ejercicio5(wordA,WordB)).toContain("Iguales");

})