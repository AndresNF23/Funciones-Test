"use strict";
const Organice = require('./funcion6');
const array = ['N', 23, 'F', 2, 202, 'A'];
const letterA = array.slice(0, 1);
const letterB = array.slice(2, 3);
const letterC = array.slice(5, 6);
const string = letterA.concat(letterB, letterC);
const orderA = string.sort();
const numbers = array.filter(Number);
const orderB = numbers.sort((a, b) => a - b);
const sorted = orderA.concat(orderB);
test('Sort', () => {
    expect(sorted).toEqual(['A', 'F', 'N', 2, 23, 202]);
    console.log(sorted);
});
