const ejercicio3 = require ("./funcion3");

test ("Multiword", ()=>{

 let  arrayletras1 = ["a", "b", "c"];
 let  arrayletras2 = ["d", "e", "f"];
 let  arrayletras3 = ["g", "h", "i"];

 let group = arrayletras1.concat(arrayletras2,arrayletras3);

        expect(ejercicio3(group)).toEqual(group);

})