const ejercicio1 = require ("./Funcion1");

test("arreglo", () =>{
    
    let array1: string [] = [];
        array1 = ["a", "i", "u"];

    let array2: string [] = [];
        array2  = ["e", "o", "z"];
    
    let arrayFinal = ["a","e","i","o","u","z"]


    expect(ejercicio1(array1,array2)).toEqual(arrayFinal);

})