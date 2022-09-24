const ejercicio4 = require ('./funcion4');

test('verificar', ()=>{

    const WordA: string[] = ['laptop', 'teclado', 'mouse', 'pantalla'];
    const WordB: string[] = ['teclado', 'microfono', 'mouse', 'audifonos'];
    
    const listWords: string[] = ['teclado', 'mouse'];


    expect(ejercicio4(WordA, WordB)).toEqual(listWords);
});
