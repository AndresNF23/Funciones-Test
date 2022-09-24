"use strict";
const ejercicio4 = require('./funcion4');
test('verificar', () => {
    const WordA = ['laptop', 'teclado', 'mouse', 'pantalla'];
    const WordB = ['teclado', 'microfono', 'mouse', 'audifonos'];
    const listWords = ['teclado', 'mouse'];
    expect(ejercicio4(WordA, WordB)).toEqual(listWords);
});
