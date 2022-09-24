const ejercicio2 = require ('./Funcion2');

test("Division", () =>{
   
 let numberArray: number [] = [];
     numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 let result: any[] 
     result= [[6,8], [5,7]];

    expect(ejercicio2(numberArray)).not.toEqual(result);
})