"use strict";
let arrayletras1 = ["a", "b", "c"];
let arrayletras2 = ["d", "e", "f"];
let arrayletras3 = ["g", "h", "i"];
let group = arrayletras1.concat(arrayletras2, arrayletras3);
function ordenArray(array) {
    let arr = [];
    array.sort();
    for (let a = 0; a < array.length; a++) {
        const element = array[a];
        arr.push(element);
    }
    return arr;
}
console.log(ordenArray(group));
module.exports = ordenArray;
